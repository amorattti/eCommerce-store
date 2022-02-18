import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader,
  ListGroup, ListGroupItem,
  BoxContainer, BoxItem, NavLink,
} from './styles'

import {
  Outlet
} from "react-router-dom";


const UserDashboard = () => {
  const { user: { _id, name, email, role }, token } = isAuthenticated()

  const userLinks = () => {
    return (
      <Card width="30rem">
        <CardHeader as="h4">
          Menu
        </CardHeader>
        <ListGroup>
          {/* <ListGroupItem>
            <NavLink to="/cart">My Cart</NavLink>
          </ListGroupItem> */}
          <ListGroupItem>
            <NavLink to={`/user/dashboard/profile/${_id}`}>Profile</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to={`/user/dashboard`}>My Shopping</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

  // const userInfo = () => {
  //   return (
  //     <Card width="600px">
  //       <CardHeader>
  //         User Information
  //       </CardHeader>
  //       <ListGroup>
  //         <ListGroupItem>{name}</ListGroupItem>
  //         <ListGroupItem>{email}</ListGroupItem>
  //         <ListGroupItem>
  //           {role === 0 ? "registered user" : "admin"}
  //         </ListGroupItem>
  //       </ListGroup>
  //     </Card>
  //   )
  // }


  return (
    <Layout title="Dashboard" description={`Welcome ${name}`}>
      <BoxContainer>
        <BoxItem>
          {userLinks()}
        </BoxItem> 
        <BoxItem>
          <Outlet />
        </BoxItem> 
      </BoxContainer>
    </Layout >
  )
}

export default UserDashboard
