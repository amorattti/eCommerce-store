import React, { useState, useEffect } from 'react'
import Card from '../../../components/Card'
import Layout from '../../../hoc/Layout'
import { getsProducts } from './../../apiCore'
import { Header, Paragraph, LoaderWrapper } from './style'
import Grid from '../../../components/Grid'
import { LoadingIndicator } from '../../../components'
import { Helmet } from "react-helmet";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(true)

  const loadProductsBySell = () => {
    getsProducts('sold', 4).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
        setLoader(false)
      }
    })
  }

  const loadProductsByArrival = () => {
    getsProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
        setLoader(false)
      }
    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()

  }, [])

  return (
    <Layout title="Technical books shop" description="Here you can get the book easly when are avaible in our stock">
      <Helmet>
        <title>TechBooks</title>
      </Helmet>

      <Header align="center">BEST <span> TOP </span> SELLERS</Header>
      <Paragraph>Those books which are sold with in few days
        and still available in our stock which you can get with us easily
      </Paragraph>

      {!loader ? (
        <Grid>
          {productsBySell.map((product) => <Card key={product._id} product={product} />)}
        </Grid>
      ) : <LoaderWrapper><LoadingIndicator /></LoaderWrapper>}

      <Header>News</Header>

      {!loader ? (
        <Grid>
          {productsByArrival.map((product) => <Card key={product._id} product={product} />)}
        </Grid>
      ) : <LoaderWrapper><LoadingIndicator /></LoaderWrapper>}
    </Layout>
  )
}

export default Home
