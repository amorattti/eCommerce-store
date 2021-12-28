import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../hoc/Layout'
import { getCart } from '../../cartHelper'
import Card from '../../../components/Card'
import { Row, Col } from './style'
import ShowImage from '../../../components/ShowImage'

const Cart = () => {
  const [items, setItems] = useState([])

  useEffect(() => {

    setItems(getCart())
  }, [])




  const showItems = items => {
    return (
      <div>
        <h2>
          Your cart has {`${items.length}`} items
        </h2>
        <hr />
        <table>
          {items.map((product) => (
            <tr key={product._id}>
              <td>
                <ShowImage height="120px" width='120px' url="product" item={product}/>
              </td>
              <td>{product.name}</td>
              <td>
                <div>
                  <span>+</span>
                  <span>{product.quantity}</span>
                  <span>-</span>
                </div>
              </td>
              <td>{product.price}</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }

  const noItemsMessage = () => {
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  }

  return (
    <Layout>
      <Row>
        <Col size={8}>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </Col>
        <Col ize={4}>
          <p>show checkout options/shipping address/total/update quantity</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart