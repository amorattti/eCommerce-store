import React, { useState, useEffect } from 'react'
import Layout from '../../../hoc/Layout'
import { getsProducts } from './../../apiCore'
import Card from './Card/Card.js'
import { Grid, Header } from './style'

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getsProducts('sold').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
      }
    })
  }

  const loadProductsByArrival = () => {
    getsProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
      }
    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <Layout title="Home page" description="Node React E-commerce App">
      <Header>Best sellerss</Header>
      <Grid>
        {productsBySell.map((product) => <Card product={product} />)}
      </Grid>
      <Header>News</Header>
      <Grid style={{paddingBottom: '50px'}}>
        {productsByArrival.map((product) => <Card product={product} />)}
      </Grid>
    </Layout>
  )
}

export default Home
