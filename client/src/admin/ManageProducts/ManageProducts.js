import React, { useState, useEffect } from 'react'
import { fetchProductById, fetchProducts } from '../apiAdmin'
import { isAuthenticated } from '../../auth'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Layout from '../../hoc/Layout'

import * as S from './style'


const ManageProducts = () => {
  const [products, setProducts] = useState([])
  let { userId } = useParams();

  const { token } = isAuthenticated()

  const init = async () => {
    const getProductById = await fetchProductById(token)
    const getProducts = await fetchProducts(token)

    setProducts(getProducts)

    console.log(getProductById)
    console.log('getProducts', getProducts)
  }

  useEffect(() => {
    init()
  }, [])

  console.log(products, 'ss')


  const singleProduct = (product) => {
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
          <>
            <span>{product.createdAt}</span>
            <span>
              <Link to={`/product/${product._id}`}>
                {product.name}
              </Link>
            </span>
            <span>
              <div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </span>
          </>
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
