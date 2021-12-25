import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { fetchProductById, fetchRelatedProducts } from '../../apiCore'
import ShowImage from '../../../components/ShowImage'
import { Row, Col, ImageSection, ContentSection, Heading, H5 } from './style'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Moment from 'react-moment';

const Product = () => {
  const [product, setProduct] = useState({})
  const [productRelated, setProductRelated] = useState([])
  const [error, setError] = useState({})
  let { productId } = useParams()

  useEffect(() => {
    loadProduct()
  }, [productId])

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

  const checkProductAvailability = ({ quantity }) => {
    if (quantity > 1) {
      return <H5 color="#198754">Avaible</H5>
    } else {
      return <H5 color="#ff0000">Inaccessible</H5>
    }
  }

  return (
    <Layout>
      <Row>
        <Col size={3}>
          <ImageSection>
            <ShowImage url="product" item={product} />
          </ImageSection>
        </Col>
        <Col size={1}></Col>
        <Col size={7}>
          <ContentSection>
            <h1>{product.name}</h1>
            <div>
              <h5>Description: </h5>
              <p>{product.description}</p>
            </div>
            {checkProductAvailability(product)}
            <h5>
              {`${product.price}$`}
            </h5>
            <Button>Add to card</Button>
            <div>
              Added on <Moment fromNow ago>{product.createdAt}</Moment>
            </div>
          </ContentSection>
        </Col>
      </Row>
      <Row>
        <Col size={12}>
          <Heading>Products related </Heading>
        </Col>
      </Row>
      <Row>
        {productRelated.length !== 0 && productRelated.map((product) => {
          return (
            <Col>
              <Card key={product._id} product={product} />
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default Product
