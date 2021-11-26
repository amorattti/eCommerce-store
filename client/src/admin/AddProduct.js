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

  return (
    <Layout title="Add Product">
      Product
      <div>
      </div>
    </Layout >
  )
}

export default AddProduct
