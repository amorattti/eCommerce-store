import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { fetchProductById, fetchRelatedProducts } from '../../apiCore'
import ShowImage from '../../../components/ShowImage'
import { RowFlex, Col, ImageSection, ContentSection, Heading,
   H5, RowGrid,AuthorName, Description } from './style'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import { addItemToLocalStorage } from '../../cartHelper'
import { useNavigate } from "react-router-dom";
import { GrCart } from 'react-icons/gr'

const Product = () => {
  const [product, setProduct] = useState({})
  const [productRelated, setProductRelated] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState({})
  let { productId } = useParams()
  let navigate = useNavigate()
  console.log(product)
  useEffect(() => {
    loadProduct()

    return () => {
      setProduct({})
      setProductRelated([])
    }
  }, [productId])

  const addToCart = (product) => {
    addItemToLocalStorage(product, () => {
      setRedirect(true)
    })
  }

  const shouldRedirect = (redirect) => {
    if (redirect) {
      navigate(`/cart`)
    }
  }

  const loadProduct = async () => {
    try {
      const products = await fetchProductById(productId)
      setProduct(products)
      const relatedProducts = await fetchRelatedProducts(productId)
      setProductRelated(relatedProducts)
    } catch (error) {
      setError(error)
    }
  }

  const checkProductAvailability = ({ quantity, sold }) => {
    const left = sold - quantity

    if (quantity > 0) {
      return <H5 color="#317656">Avaible({Math.abs(left)})</H5>
    } else if (quantity < 1) {
      return <H5 color="#ff0000">Inaccessible</H5>
    }
  }

  return (
    <Layout>
      {shouldRedirect(redirect)}
      <RowFlex>
        <Col size={3}>
          <ImageSection>
            {product._id &&
              <ShowImage width='100%' height='auto' url="product" item={product} />
            }
          </ImageSection>
        </Col>
        <Col size={7}>
          <ContentSection>

            <h1>{product.name}</h1>
            <AuthorName>Book by {product.author}</AuthorName>

            <Description>
              <h5>Book Description: </h5>
              <p>{product.description}</p>
            </Description>

            {checkProductAvailability(product)}

            <h5>{`$${product.price}`} </h5>

            <Button onClick={() => addToCart(product)}>
              <span>Add to card</span>
            </Button>

          </ContentSection>
        </Col>
      </RowFlex>
      <RowFlex>
        <Col size={12}>
          <Heading>Products related </Heading>
        </Col>
      </RowFlex>
      <RowGrid>
        {productRelated.length !== 0 ? productRelated.map((product) => {
          return (
            <div key={product._id}>
              <Card heightImg="100%" product={product} />
            </div>
          )
        }) : <div>No related products</div>}
      </RowGrid>
    </Layout>
  )
}

export default Product
