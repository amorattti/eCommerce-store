import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import Layout from '../hoc/Layout'
import { createProduct } from './apiAdmin'

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
    console.log(value)
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    console.log(formData)
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
      <h4>Post Photo</h4>
      <div> {/* formg-roup */}
        <label></label>
        <input
          onChange={handleChange('photo')}
          type="file"
          name="photo"
        />
      </div>

      <div> {/* formg-roup */}
        <label>Name</label>
        <input
          onChange={handleChange('name')}
          type="text"
          value={name} />
      </div>

      <div> {/* formg-roup */}
        <label>Description</label>
        <textarea
          onChange={handleChange('description')}
          type="text"
          value={description} />
      </div>

      <div> {/* formg-roup */}
        <label>Price</label>
        <input
          onChange={handleChange('price')}
          type="number"
          value={price} />
      </div>

      <div> {/* formg-roup */}
        <label>Category</label>
        <select onChange={handleChange('category')}>
          <option value="617ee00728533daa63292924">React</option>
          <option value="617ee00e28533daa63292927">Node</option>
          <option value="617ee03728533daa6329292d">Angular</option>
          <option value="619eb745c3513af924555ebf">Phyton</option>
          <option value="617ee02928533daa6329292a">Vue</option>
        </select>
      </div>

      <div> {/* formg-roup */}
        <label>Shipping</label>
        <select onChange={handleChange('shipping')}>
          <option value="0">no</option>
          <option value="1">yes</option>
        </select>

      </div>

      <div> {/* formg-roup */}
        <label>Quantity</label>
        <input
          onChange={handleChange('quantity')}
          type="number"
          value={quantity} />
      </div>
      <button>Create Product</button>
    </form>
  )

  return (
    <Layout title="Add Product">
      Product
      <div>
        {newPostForm()}
      </div>
    </Layout >
  )
}

export default AddProduct
