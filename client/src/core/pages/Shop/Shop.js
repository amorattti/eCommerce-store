import React, { useState, useEffect } from 'react'
import Layout from '../../../hoc/Layout'
import { getCategories } from '../../apiCore'
import { Col, Row } from './style'
import Checkbox from './Checkbox/Checkbox'
import { prices } from './fixedPrices'
import RadioBox from './RadioBox/RadioBox'

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  })
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)

  const init = async () => {
    const response = await getCategories()
    setCategories(response)
  }

  useEffect(() => {
    init()
  }, [])

  const handleFilters = (filters, filterBy) => {
    console.log(filters, '= filters', 'filtersby =', filterBy,)
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters
    setMyFilters(newFilters)
  }

  return (
    <Layout title="Shop page"
      description="search and find your favorite books">
      <Row>
        <Col size={4}>
          <ul>
            <h4>Filters by category</h4>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, 'category')}
            />
          </ul>
          <ul>
            <h4>Filters by prices range</h4>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, 'price')}
            />
          </ul>
        </Col>
        <Col size={8}>
          {JSON.stringify(myFilters)}
        </Col>
      </Row>
    </Layout>
  )
}
export default Shop
