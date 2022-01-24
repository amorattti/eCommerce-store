import React, { useState } from 'react'
import ShowImage from '../ShowImage'
import {
  ProductCart, ProductInfo, LinkProduct,
  ProductImage, ButtonCard, ActionButtonsContainer
} from './style'
import { addItemToLocalStorage } from '../../core/cartHelper'
import { useNavigate } from "react-router-dom"
import { RiShoppingCartLine } from 'react-icons/ri';

const Card = ({ product, heightImg="100%" }) => {
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
          <ShowImage url="product" height={heightImg} item={product} />
        </ProductImage>
        <ProductInfo>
          <LinkProduct to={`/product/${product._id}`}>
           {product.name}
          </LinkProduct>
        </ProductInfo>
        <ActionButtonsContainer>     
            <ButtonCard onClick={() => addToCart(product)}>
              <RiShoppingCartLine size="1.8em"/>
            </ButtonCard>
            <div>${product.price}</div>
          </ActionButtonsContainer>
      </ProductCart>
    </>
  )
}

export default React.memo(Card)
