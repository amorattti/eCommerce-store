import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import Card from '../../../components/Card'
import { Row, Col, Table } from './style'
import ShowImage from '../../../components/ShowImage'
import * as S from './style'
import plusIcon from '../../../img/plus.png'
import minusIcon from '../../../img/minus.png'

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
        <S.TitleCart>Shopping Cart</S.TitleCart>
        {items.map(product => (
          <S.ItemBody>
            <S.ButtonRemove></S.ButtonRemove>

            <S.Image>
              <ShowImage height="100%" width='55px' url="product" item={product} />
            </S.Image>

            <S.Name>
              <span>{product.name}</span>
            </S.Name>

        
              <S.Quantity>
                <button>
                  <img src={plusIcon} alt="" />
                </button>
                <input value="1"></input>
                <button>
                  <img src={minusIcon} alt="" />
                </button>
              </S.Quantity>

              <S.TotalPrice>$549</S.TotalPrice>
        

          </S.ItemBody>
        ))}

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
        <Col size={4} style={{
          // boxShadow: '1px 2px 3px 0px rgba(0,0,0,0.10)',
          borderRadius: '6px',
          padding: '20px 30px'

        }}>
          <h2>Summary</h2>
          <hr />
          {/* <p>show checkout options/shipping address/total/update quantity</p> */}
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart