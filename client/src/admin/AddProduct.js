import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth'
import Layout from '../hoc/Layout'
import { createProduct, getCategories } from './apiAdmin'

import EntryCard from '../components/EntryCard'
import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import Button from '../components/Button'
import Alert from '../components/Alert'

const AddProduct = () => {
  const { user, token } = isAuthenticated()
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    categories: [],
    quantity: '',
    photo: '',
    shipping: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
  })

  const {
    name,
    description,
    price,
    category,
    categories,
    quantity,
    photo,
    shipping,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values


  const init = async () => {
    const response = await getCategories()
      .catch((e) => setValues({ ...values, error: e }))
    setValues({ ...values, categories: response, formData: new FormData() })
  }

  useEffect(async () => {
    init()
  }, [])

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: '', loading: true })

    createProduct(user._id, token, formData)
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          setValues({
            ...values,
            name: '',
            description: '',
            price: '',
            quantity: '',
            photo: '',
            shipping: '',
            loading: false,
            error: false,
            createdProduct: data.name
          })
        }
      })
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
      <Button>Create Product</Button>
    </form>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      {error}
    </Alert>
  )

  const showSuccess = () => (
    <Alert value={createdProduct} theme="success">
     <h5 style={{margin: 0}}>{createdProduct} is created!</h5> 
    </Alert>
  )
  const showLoading = () => (
    <Alert value={loading} theme="success">
      ...loading
    </Alert>
  )

  return (
    <Layout title="Add Product">
      <EntryCard>
        {showError()}
        {showLoading()}
        {showSuccess()}
        {newPostForm()}
      </EntryCard>
    </Layout >
  )
}

export default AddProduct