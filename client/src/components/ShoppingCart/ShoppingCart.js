import React, { useState, useEffect } from 'react'
import * as S from './style'
import ShowImage from '../ShowImage'
import {Link} from 'react-router-dom'

const ShoppingCart = ({ product, updateItem, removeItem, setUpdate, run }) => {
  const [count, setCount] = useState(parseInt(product.count))

  useEffect(() => {
    updateItem(product._id, count)
    setUpdate(!run) // update Parent Component State
  }, [count])

  const handleChangeInput = (e, productId) => {
    const inputValue = parseInt(e.target.value)
    setCount(inputValue < 1 ? 1 : inputValue)

    if (inputValue >= 1) {
      updateItem(productId, inputValue)
    }
  }

  return (
    <>
      <S.ItemBody>
        <S.ButtonRemove onClick={() => removeItem(product._id)}>
        </S.ButtonRemove>

        <S.Image>
          <ShowImage height="100%" width='55px' url="product" item={product} />
        </S.Image>

        <S.Name>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </S.Name>

        <S.Quantity>
          <S.QuantityButton plus onClick={() => setCount(count + 1)}>
          </S.QuantityButton>
          <input
            type="number"
            min="0"
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            onChange={(e) => handleChangeInput(e, product._id)}
            value={count} />
          <S.QuantityButton minus onClick={() => setCount((prevCount) => {
            if (prevCount > 1) {
              return prevCount - 1
            } return 1
          })}>    
          </S.QuantityButton>
        </S.Quantity>

        <S.TotalPrice>${product.price}</S.TotalPrice>
      </S.ItemBody>

    </>
  )
}

export default ShoppingCart
