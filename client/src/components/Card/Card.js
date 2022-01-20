import React, { useState } from 'react'
import ShowImage from '../ShowImage'
import {
  ProductCart, ProductInfo, LinkProduct,
  ProductImage, ButtonCard
} from './style'
import { addItemToLocalStorage } from '../../core/cartHelper'
import { useNavigate } from "react-router-dom"

const Card = ({ product }) => {
  let navigate = useNavigate()
  const [redirect, setRedirect] = useState(false)

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

  return (
    <>
      {shouldRedirect(redirect)}
      <ProductCart>
        <ProductImage to={`/product/${product._id}`}>
        
            <ShowImage url="product" item={product} />
        
        </ProductImage>
        <ProductInfo>
          <LinkProduct to="/">
            <span>{product.name}</span>
          </LinkProduct>
          <span>
            <p>${product.price}</p>
          </span>
        </ProductInfo>
        <ButtonCard onClick={() => addToCart(product)}>
          Add to card
        </ButtonCard>
      </ProductCart>
    </>
  )
}

export default React.memo(Card)
