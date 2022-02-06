import React, { useState, useEffect } from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader,
  ListGroup, ListGroupItem,
  BoxContainer, BoxItem, NavLink,
  DetailsProducts, Photo, HeadSection, BodySection, DetailProduct
} from './styles'
import { fetchPurchaseHistory } from '../apiCore'
import ShowImage from '../../components/ShowImage'
import Moment from 'react-moment';


const UserDashboard = () => {
  const [history, setHistory] = useState([])

  const { user: { _id, name, email, role }, token } = isAuthenticated()

  const initHistory = async () => {
    const historyOrders = await fetchPurchaseHistory(_id, token)
    setHistory(historyOrders)
  }

  useEffect(() => {
    initHistory()
  }, [])


  console.log(history, 'HISTORY')
  const userLinks = () => {
    return (
      <Card width="300px">
        <CardHeader as="h4">
          User Links
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <NavLink to="/cart">My Cart</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to={`/profile/${_id}`}>Update Profile</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

  const userInfo = () => {
    return (
      <Card width="600px">
        <CardHeader>
          User Information
        </CardHeader>
        <ListGroup>
          <ListGroupItem>{name}</ListGroupItem>
          <ListGroupItem>{email}</ListGroupItem>
          <ListGroupItem>
            {role === 0 ? "registered user" : "admin"}
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

  const purchaseHistory = () => {
    return (
      <Card>
        <CardHeader>
          Purchase history
        </CardHeader>
        <ListGroup>

          {history && history.map((order) => (
            <ListGroupItem key={order._id}>
              <HeadSection>
                <span>Status: {order.status}</span>
                <span>
                  <Moment format="YYYY/MM/DD">
                    {order.createdAt}
                  </Moment>
                </span>
              </HeadSection>
              <BodySection>
                <div>
                  {order.products.map((product) => (
                    <DetailProduct>
                      <Photo>
                        <ShowImage height='85%' width='85%' item={product} />
                      </Photo>
                      <div>
                        <span>{product.name}</span>
                        <span>{product.price}$</span>
                        <span>count: {product.count} </span>
                      </div>
                    </DetailProduct>
                  ))}
                </div>
                <DetailsProducts>
               
                  <span>Address:
                    <p>
                      {order.address}
                    </p>
                  </span>
                  <span>Total amount: {order.amount}$</span>
                </DetailsProducts>
              </BodySection>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    )
  }

  return (
    <Layout title="Dashboard" description={`Welcome ${name}`}>
      <BoxContainer>
        <BoxItem>
          {userLinks()}
          {userInfo()}
        </BoxItem>
        {purchaseHistory()}
      </BoxContainer>

    </Layout >
  )
}

export default UserDashboard
