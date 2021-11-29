import React, {useState, useEffect} from 'react'
import Layout from '../hoc/Layout'
import { getsProducts } from './apiCore'

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getsProducts('sold').then(data => {
      console.log('data', data)
      if(data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
      }
    })
  }

  const loadProductsByArrival = () => {
    getsProducts('createdAt').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
      }
    })
  }

useEffect(() => {
  loadProductsByArrival()
  loadProductsBySell()
},[])
 // console.log(productsBySell, 'and by arrival',productsByArrival )
  return (
    <Layout title="Home page" description="Node React E-commerce App">
      ... {JSON.stringify(productsByArrival)}
    </Layout>
  )
}

export default Home
