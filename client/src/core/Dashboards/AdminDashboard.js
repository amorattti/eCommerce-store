import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader, ListGroup, ListGroupItem, BoxContainer, BoxItem, NavLink,
  DefaultBoxContainer
} from './styles'
import { Helmet } from "react-helmet"

import { Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const { user: { name, email, role } } = isAuthenticated()

  let match = useLocation()

  const activeLink = (name) => {
    const location = match.pathname.split('/').pop()
    if (location === name) {
      return { color: '#e5ab00' }
    } else {
      return { color: 'inherit' }
    }
  }

  const adminLinks = () => {
    return (
      <Card >
        <CardHeader as="h4">
          Admin menu
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <NavLink
              style={activeLink('category')}
              to="/admin/dashboard/create/category">Create Category</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              style={activeLink('product')}
              to="/admin/dashboard/create/product">Create Product</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              style={activeLink('orders')}
              to="/admin/dashboard/orders">View Orders</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              style={activeLink('products')}
              to="/admin/dashboard/products">Manage Products</NavLink>
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


  const DashboardDefault = () => (
    <DefaultBoxContainer>
        Welcome in admin panel dashboard.
    </DefaultBoxContainer>
  )

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
        {Outlet() !== null ? <Outlet /> : DashboardDefault()}
      </BoxContainer>
    </Layout >
  )
}

export default AdminDashboard
