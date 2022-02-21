import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import { Row, Col } from './style'
import { updateItem, removeItem } from '../../cartHelper'
import ShoppingCart from '../../../components/ShoppingCart'
import * as S from './style'
import Checkout from '../../../components/Checkout'
import { Helmet } from "react-helmet"

const Cart = () => {
  const [items, setItems] = useState([])
  const [runFromShoppingCart, updateFromShoppingCart] = useState(false)
  // update component every time when counter in child component
  // has been changed

  useEffect(() => {
    if (getCart() !== null) {
      setItems(getCart())
    }
  }, [runFromShoppingCart])

  const removeProduct = (id) => {
    removeItem(id)
    setItems(getCart())
  }

  const shoppingCart = (products) => (
    <>
      <S.ShoppingCart>
        <S.TitleCart>Shopping Cart</S.TitleCart>
        {products.map(product => (
          <ShoppingCart
            key={product._id}
            product={product}
            removeItem={removeProduct}
            updateItem={updateItem}
            setUpdate={updateFromShoppingCart}
            run={runFromShoppingCart}
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

  return (
    <Layout description='Transaction summary'>
      <Helmet>
        <title>Shopping cart</title>
      </Helmet>
      <Row>
        <Col size={8}>
          {items.length > 0 ? shoppingCart(items) : noItemsMessage()}
        </Col>
        <Col size={4} >
          {items.length > 0 ? (
            <Checkout
              products={items}
              setItems={setItems}
            />) : null}
        </Col>
      </Row>
    </Layout >
  )
}

export default Cart