import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader, ListGroup, ListGroupItem, BoxContainer, BoxItem, NavLink
} from './styles'
import { Helmet } from "react-helmet"

import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const { user: { name, email, role } } = isAuthenticated()

  const adminLinks = () => {
    return (
      <Card >
        <CardHeader as="h4">
          Admin menu
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <NavLink to="/admin/dashboard/create/category">Create Category</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/admin/dashboard/create/product">Create Product</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/admin/dashboard/orders">View Orders</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/admin/dashboard/products">Manage Products</NavLink>
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
      <Helmet>
        <title>Dashboard admin</title>
      </Helmet>
      <BoxContainer>
        <BoxItem>
          {adminLinks()}
          {/* {adminInfo()} */}
        </BoxItem>
      </BoxContainer>
      <BoxContainer>
        <Outlet/>
      </BoxContainer>
    </Layout >
  )
}

export default AdminDashboard
