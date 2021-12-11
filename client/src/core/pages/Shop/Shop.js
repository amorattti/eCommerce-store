import React, { useState, useEffect } from 'react'
import Layout from '../../../hoc/Layout'
import { getCategories, getFilteredProducts } from '../../apiCore'
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
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const [filteredResults, setFilteredResults] = useState(0)

  const init = async () => {
    const response = await getCategories()
    setCategories(response)
  }

  const loadFilterResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        console.log('datassss', data)
        setFilteredResults(data)
      }
    })
  }

  useEffect(() => {
    init()
    loadFilterResults(myFilters.filters)
  }, [])

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }
    //  console.log(filters)
    loadFilterResults(myFilters.filters)
    setMyFilters(newFilters)
  }

  const handlePrice = (value) => {
    const data = prices
    let array = []

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array
      }
    }
    return array
  }

  return (
    <Layout
      title="Shop page"
      description="search and find your favorite books"
    >
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
          {JSON.stringify(filteredResults)}
        </Col>
      </Row>
    </Layout>
  )
}
export default Shop
