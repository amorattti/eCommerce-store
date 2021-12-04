import React, { useState, useEffect } from 'react'
import Layout from '../../../hoc/Layout'
import { Col, Row } from './style'

const Shop = () => {
  return (
    <Layout title="Shop page"
      description="search and find your favorite books">
      <Row>
        <Col size={4}>left Sidebar</Col>
        <Col size={8}>right col</Col>
      </Row>
    </Layout>
  )
}

export default Shop
