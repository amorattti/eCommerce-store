import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import { Row, Col } from './style'
import { updateItem, removeItem } from '../../cartHelper'
import ShoppingCart from '../../../components/ShoppingCart'
import * as S from './style'
import Checkout from '../../../components/Checkout'

import { useForm } from "react-hook-form";

const Cart = () => {
  const [items, setItems] = useState([])
  const [runFromShoppingCart, updateFromShoppingCart] = useState(false)
  // update component every time when counter in child component
  // has been changed

  const { register, handleSubmit } = useForm();

  
  const onSubmit = data => console.log((data))


  console.log(register, 'ss')


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


  const Address = () => (
    <div>
      <h2>Address</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder='name' />
          <input {...register("street_address")} placeholder='street address' />
          <input {...register("city")} placeholder='city' />
        </div>
        <div>
          <input {...register("state")} placeholder='state' />
          <input {...register("zip_code")} placeholder='zip code' />
        </div>

        <input type="submit" />
      </form>


    </div>
  )

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  )

  return (
    <Layout description='Transaction summary'>
 
      <Row>
        <Col size={8}>
          {items.length > 0 ? shoppingCart(items) : noItemsMessage()}
        </Col>   
        <Col size={4} >
          <Checkout
            products={items}
            setItems={setItems}
          />
        </Col>
      </Row>
    </Layout >
  )
}

export default Cart