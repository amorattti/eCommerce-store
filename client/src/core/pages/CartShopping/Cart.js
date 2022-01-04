import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import { Row, Col } from './style'
import { updateItem, removeItem } from '../../cartHelper'
import ShoppingCart from '../../../components/ShoppingCart'
import * as S from './style'
import Checkout from '../../../components/Checkout'

const Cart = () => {
  const [items, setItems] = useState([])
  // SetCountInput   is just basically to update component

  useEffect(() => {
    if (getCart() !== null) {
      setItems(getCart())
    }
  }, [])

  const removeProduct = (id) => {
    removeItem(id)
    setItems(getCart())
  }

  const promises = (cb) => {
    return new Promise((resolve, rejest) => {
  
          resolve(cb())
  
    })
  }

  const changeQuantityProduct = (count,id, cb) => {
    updateItem(id, count)
   cb()
   setItems(getCart())


      
      
  
    console.log('po callbacku')
 
  }


  const shoppingCart = (products) => (
    <>
      <S.ShoppingCart>
        <S.TitleCart>Shopping Cart</S.TitleCart>
        {products.map(product => (
          <ShoppingCart
            key={product._id}
            product={product}
            changeQuantityProduct={changeQuantityProduct}
            removeItem={removeProduct}
            updateItem={updateItem}
          />
        ))}
      </S.ShoppingCart>
    </>
  )

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  )
  console.log('State cart', items)
  return (
    <Layout>
      <Row>
        <Col size={8}>
          {items.length > 0 ? shoppingCart(items) : noItemsMessage()}
        </Col>
        <Col size={4} style={{
          // boxShadow: '1px 2px 3px 0px rgba(0,0,0,0.10)',
          borderRadius: '6px',
          padding: '20px 30px'

        }}>
          <h2>Summary</h2>
          <hr />
          <Checkout products={items} />
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart