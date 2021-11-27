import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth'
import Layout from '../hoc/Layout'
import { createProduct } from './apiAdmin'

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

  useEffect(() => {
    setValues({ ...values, formData: new FormData() })
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
            loading: true,
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
          <option value="617ee00728533daa63292924">React</option>
          <option value="617ee00e28533daa63292927">Node</option>
          <option value="617ee03728533daa6329292d">Angular</option>
          <option value="619eb745c3513af924555ebf">Phyton</option>
          <option value="617ee02928533daa6329292a">Vue</option>
        </Input>
      </InputGroup>

      <InputGroup>
        <label>Shipping</label>
        <Input as="select" onChange={handleChange('shipping')}>
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

  return (
    <Layout title="Add Product">
      <EntryCard>
        {newPostForm()}
      </EntryCard>
    </Layout >
  )
}

export default AddProduct
