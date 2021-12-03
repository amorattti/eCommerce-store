import React from 'react'
import ShowImage from '../../../ShowImage'
import { ProductCart, ProductInfo, LinkProduct, ProductImage, ButtonCard } from './style'

const Card = ({ product }) => {
  return (
    <>
      <ProductCart>
        <ProductImage to="/ss">
          <span>
            <ShowImage url="product" item={product} />
          </span>
        </ProductImage>
        <ProductInfo>
          <LinkProduct to="/">
            <span>{product.name}</span>
          </LinkProduct>
          <span>
            <p>{product.price}$</p>
          </span>
        </ProductInfo>
        <ButtonCard>
          Add to card
        </ButtonCard>
      </ProductCart>
    </>
  )
}

export default Card
