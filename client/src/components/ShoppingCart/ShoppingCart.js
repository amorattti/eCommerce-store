import React, { useState, useEffect } from 'react'
import * as S from './style'
import ShowImage from '../ShowImage'
import plusIcon from '../../img/plus.png'
import minusIcon from '../../img/minus.png'
import { getCart } from '../../core/cartHelper'

const ShoppingCart = ({
  product, updateItem, removeItem,
  changeQuantityProduct }) => {
  const [count, setCount] = useState(parseInt(product.count))
  const [state, setState] = useState(product)

  useEffect(() => {
    updateItem(product._id, count)
    console.log(getCart(), 'getCart Shopping cart')

   // setState(getCart())
  }, [count])

  const handleChangeInput = (e, productId) => {
    const inputValue = parseInt(e.target.value)
    setCount(inputValue < 1 ? 1 : inputValue)

    if (inputValue >= 1) {
      updateItem(productId, inputValue)
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  console.log('render ShoppingCart')

  return (
    <>
      <S.ItemBody>
        <S.ButtonRemove onClick={() => removeItem(product._id)}>
        </S.ButtonRemove>

        <S.Image>
          <ShowImage height="100%" width='55px' url="product" item={product} />
        </S.Image>

        <S.Name>
          <span>{product.name}</span>
        </S.Name>

        <S.Quantity>
          <button onClick={() => {
            changeQuantityProduct(count, product._id, increment)
            console.log('setCount in shopping cart')
          }}>
            <img src={plusIcon} alt="" />
          </button>
          <input
            type="number"
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            onChange={(e) => handleChangeInput(e, product._id)}
            value={count} />
          <button onClick={() => setCount(count - 1)}>
            <img src={minusIcon} alt="" />
          </button>
        </S.Quantity>

        <S.TotalPrice>{product.price}$</S.TotalPrice>
      </S.ItemBody>

    </>
  )
}

export default ShoppingCart
