import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { isAuthenticated } from '../../../auth'
import Layout from '../../../hoc/Layout'
import { getCategories, updateProduct } from '../../apiAdmin'
import { fetchProductById } from '../../../core/apiCore'

import InputGroup from '../../../components/InputGroup_Styles'
import Input from '../../../components/Input_Styles'
import Button from '../../../components/Button'
import Alert from '../../../components/Alert'
import { useNavigate } from 'react-router'

const Edit = () => {
  const { user, token } = isAuthenticated()
  const [values, setValues] = useState({
    name: '',
    description: '',
    author: '',
    price: '',
    category: '',
    categories: [],
    quantity: '',
    photo: '',
    shipping: '',
    loading: false,
    error: '',
    productUpdated: '',
    redirectToProfile: false,
    formData: ''
  })
  let { productId } = useParams()

  const navigate = useNavigate()

  const { name, description, author, price, category,
    categories, quantity, photo, shipping, loading,
    error, productUpdated, redirectToProfile, formData
  } = values

  const init = async () => {
    const currentProduct = await fetchProductById(productId)
    const response = await getCategories().catch((e) => setValues({ ...values, error: e }))
    setValues({ ...values, ...currentProduct, categories: response, formData: new FormData() })
  }

  useEffect(async () => {
    init()
  }, [])

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const clickSubmit = async (e) => {
    e.preventDefault()
    setValues({ ...values, error: '', loading: true })
    const productUpdate = await updateProduct(user._id, token, productId, formData)

    if (productUpdate.error) {
      setValues({ ...values, error: productUpdate.error })
    }

    setValues({
      ...values,
      loading: false,
      error: false,
      productUpdated: productUpdate.name
    })

    navigate(-1)
  }

  const newPostForm = () => (
    <form onSubmit={clickSubmit}>
      <InputGroup>
        <label>Post Photo</label>
        <Input
          onChange={handleChange('photo')}
          type="file"
          name="photo"
          accept="image/*" />
      </InputGroup>
      <InputGroup>
        <label>Name</label>
        <Input
          onChange={handleChange('name')}
          type="text"
          value={name} />
      </InputGroup>
      <InputGroup>
        <label>Description</label>
        <Input
          as="textarea"
          onChange={handleChange('description')}
          type="text"
          value={description} />
      </InputGroup>
      <InputGroup>
        <label>Author</label>
        <Input
          onChange={handleChange('author')}
          type="text"
          value={author} />
      </InputGroup>
      <InputGroup>
        <label>Price</label>
        <Input
          onChange={handleChange('price')}
          type="number"
          value={price} />
      </InputGroup>
      <InputGroup>
        <label>Category</label>
        <Input as="select" onChange={handleChange('category')}>
          <option>Please select</option>
          {categories && categories.map((category, index) => (
            <option value={category._id} key={index}>
              {category.name}
            </option>
          ))}
        </Input>
      </InputGroup>
      <InputGroup>
        <label>Shipping</label>
        <Input as="select" onChange={handleChange('shipping')}>
          <option>Please select</option>
          <option value="0">no</option>
          <option value="1">yes</option>
        </Input>
      </InputGroup>
      <InputGroup>
        <label>Quantity</label>
        <Input
          onChange={handleChange('quantity')}
          type="number"
          value={quantity} />
      </InputGroup>
      <Button>Edit Product</Button>
    </form>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      {error}
    </Alert>
  )

  const showSuccess = () => (
    <Alert value={productUpdated} theme="success">
      <h5 style={{ margin: 0 }}>The product has been updated</h5>
    </Alert>
  )
  const showLoading = () => (
    <Alert value={loading} theme="success">
      ...loading
    </Alert>
  )

  return (
    <>
      {showError()}
      {showLoading()}
      {showSuccess()}
      {newPostForm()}
    </ >
  )
};

export default Edit;
