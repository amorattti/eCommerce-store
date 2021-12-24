import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { fetchProductById } from '../../apiCore'

const Product = () => {
  const [product, setProduct] = useState({})
  const [error, setError] = useState({})
  let { productId } = useParams()

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    try {
      const data = await fetchProductById(productId)
      setProduct(data)
    } catch (error) {
      setError(error)
    }

  }

  console.log(product)
  return (
    <Layout>
      <p>product {product.name}</p>
    </Layout>
  )
}

export default Product
