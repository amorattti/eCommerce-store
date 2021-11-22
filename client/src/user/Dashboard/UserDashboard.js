import React from 'react'
import Layout from '../../hoc/Layout'
import { isAuthenticated } from '../../auth'
import {
  Card, CardHeader, ListGroup, ListGroupItem
} from './styles'


const Dashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated()

  return (
    <Layout title="Dashboard" description="User Dashboard">
      <Card>
        <CardHeader>
          User Information
        </CardHeader>
        <ListGroup>
          <ListGroupItem> {name}</ListGroupItem>
          <ListGroupItem> {email} </ListGroupItem>
          <ListGroupItem>
            {role === 0 ? "registered user" : "admin"}
          </ListGroupItem>
        </ListGroup>
      </Card>
      <Card>
        <CardHeader>
          Purchase history
        </CardHeader>
        <ListGroup>
          <ListGroupItem>history</ListGroupItem>
        </ListGroup>
      </Card>
    </Layout>
  )
}

export default Dashboard
