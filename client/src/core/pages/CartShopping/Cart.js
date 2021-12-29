import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import Card from '../../../components/Card'
import { Row, Col, Table } from './style'
import ShowImage from '../../../components/ShowImage'
import * as S from './style'

const Cart = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    if (getCart() !== null) {
      setItems(getCart())
    }
  }, [])


  console.log('items', '', items)

  const showItems = items => {
    return (
      <S.ShoppingCart>
        <S.TitleCart>Shopping Bag</S.TitleCart>
        <S.ItemBody>

          <S.Image>
            <img src="" alt="" />
          </S.Image>

          <S.Name>
            <span>book</span>
          </S.Name>

          <S.Quantity>
            <button>
              <img src="" alt="s" /> +
            </button>
            <input type="text" name="name" value="1"></input>
            <button>
              <img src="" alt="" /> -
            </button>
          </S.Quantity>

          <S.TotalPrice>$549</S.TotalPrice>

        </S.ItemBody>
      </S.ShoppingCart>
    )
  }

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  )

  return (
    <Layout>
      <Row>
        <Col size={8}>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </Col>
        <Col size={4} style={{ border: '1px solid gray' }}>
          <h2>Summary</h2>
          <hr />
          <p>show checkout options/shipping address/total/update quantity</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart