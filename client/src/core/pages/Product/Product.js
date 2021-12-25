import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { fetchProductById } from '../../apiCore'
import ShowImage from '../../../components/ShowImage'
import { Row, Col, ImageSection, ContentSection } from './style'
import Button from '../../../components/Button'

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

  console.log(product, '[rpod')
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
              <p>
                {product.description}
              </p>
            </div>
            <h5 style={{color: 'green'}}>Avaible</h5>
            <h5>
              {`${product.price}$`}
            </h5>
            <Button>Add to card</Button>
          </ContentSection>
        </Col>
      </Row>
    </Layout>
  )
}

export default Product
