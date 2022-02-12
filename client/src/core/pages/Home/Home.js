import React, { useState, useEffect } from 'react'
import Card from '../../../components/Card'
import Layout from '../../../hoc/Layout'
import { getsProducts } from './../../apiCore'
import { Header, Paragraph } from './style'
import Grid from '../../../components/Grid'

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getsProducts('sold', 4).then(data => {
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
    <Layout title="Technical books shop" description="Here you can get the book easly when are avaible in our stock">

      <Header align="center">BEST <span> TOP </span> SELLERS</Header>
      <Paragraph>Those books which are sold with in few days 
        and still available in our stock which you can get with us easily
      </Paragraph>
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
