import React from 'react'
import ShowImage from '../ShowImage'
import {
  ProductCart, ProductInfo, LinkProduct,
  ProductImage, ButtonCard
} from './style'
import { addItemToLocalStorage } from '../../core/cartHelper'

const Card = ({ product }) => {

  const addItem = () => {
    console.log('clickc')
    addItemToLocalStorage(product, () =>{
      console.log('dodano')
    })
  }

  return (
    <>
      <ProductCart>
        <ProductImage to={`/product/${product._id}`}>
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
        <ButtonCard onClick={addItem}>
          Add to card
        </ButtonCard>
      </ProductCart>
    </>
  )
}

export default React.memo(Card)
