import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader, ListGroup, ListGroupItem, BoxContainer, BoxItem,NavLink
} from './styles'

const AdminDashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated()

  const adminLinks = () => {
    return (
      <Card width="300px">
        <CardHeader as="h4">
          Admin Links
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <NavLink to="/create/category">Create Category</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/create/product">Create Product</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

  const adminInfo = () => {
    return (
      <Card width="600px">
        <CardHeader>
          Admin Information
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

  return (
    <Layout title="Dashboard" description={`Welcome ${name}`}>
      <BoxContainer>
        <BoxItem> 
          {adminLinks()}
          {adminInfo()}
        </BoxItem>
      </BoxContainer>

    </Layout >
  )
}

export default AdminDashboard
