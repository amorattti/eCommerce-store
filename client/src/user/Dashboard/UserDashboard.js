import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader, ListGroup, ListGroupItem, BoxContainer, BoxItem,NavLink
} from './styles'
import { Link } from 'react-router-dom'


const Dashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated()

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
            <NavLink to="/profile/update">Update Profile</NavLink>
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
          <ListGroupItem>history</ListGroupItem>
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

export default Dashboard
