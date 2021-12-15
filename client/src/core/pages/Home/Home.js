import React, { useState, useEffect } from 'react'
import Card from '../../../components/Card'
import Layout from '../../../hoc/Layout'
import { getsProducts } from './../../apiCore'
import { Header } from './style'
import Grid from '../../../components/Grid'
import Search from '../../../components/Search/Search'

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
      <Search />
      <Header>Best sellerss</Header>
      <Grid>
        {productsBySell.map((product) => <Card key={product._id} product={product} />)}
      </Grid>
      <Header>News</Header>
      <Grid style={{ paddingBottom: '50px' }}>
        {productsByArrival.map((product) => <Card key={product._id} product={product} />)}
      </Grid>
    </Layout>
  )
}

export default Home
