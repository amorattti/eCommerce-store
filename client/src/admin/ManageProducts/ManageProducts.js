import React, { useState, useEffect } from 'react'
import { fetchProducts, removeProduct } from '../apiAdmin'
import { isAuthenticated } from '../../auth'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Layout from '../../hoc/Layout'

import * as S from './style'

const ManageProducts = () => {
  const [products, setProducts] = useState([])
  const { user, token } = isAuthenticated()

  const init = async () => {
    const getProducts = await fetchProducts(token)
    setProducts(getProducts)
  }

  const deleteProduct = async(user, token, productId) => {
    if (window.confirm("Delete the product?")) {
      await removeProduct(user, token, productId)
      const newList = await fetchProducts(token)
      setProducts(newList)
    }
  }

  useEffect(() => {
    init()
  }, [])

  const singleProduct = () => {
    return (
      <S.GridProductsList>
        <span>
          <strong>Date</strong>
        </span>
        <span>
          <strong>name</strong>
        </span>
        <span>Action buttons</span>
        {products && products.map((product) => (
          <React.Fragment key={product._id}>
            <span>
              <Moment format="YYYY/MM/DD">
                {product.createdAt}
              </Moment>
            </span>
            <span>
              <Link to={`/product/${product._id}`}>
                {product.name}
              </Link>
            </span>
            <span>
              <div>
                <button>
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                    to={`/admin/update/${product._id}`}>
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => deleteProduct(user._id, token, product._id) }
                >Delete</button>
              </div>
            </span>
          </React.Fragment>
        ))}
      </S.GridProductsList>
    )
  }

  return (
    <Layout title="Products List" description='Manage products'>
      <S.ProductsContainer>
        {singleProduct()}
      </S.ProductsContainer>
    </Layout>
  )

};

export default ManageProducts;
