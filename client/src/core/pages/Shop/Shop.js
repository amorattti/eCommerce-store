import React, { useState, useEffect } from 'react'
import { getCategories, getFilteredProducts } from '../../apiCore'
import { prices } from '../../fixedPrices'

import Layout from '../../../hoc/Layout'
import { ButtonLoadMore, Col, Row } from './style'
import Checkbox from '../../../components/Checkbox'
import RadioBox from '../../../components/RadioBox'
import Card from '../../../components/Card/Card'
import Grid from '../../../components/Grid'

const Shop = ({ searchValue, setSearchValue }) => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  })
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const [size, setSize] = useState(0)
  const [filteredResults, setFilteredResults] = useState([])

  const init = async () => {
    const response = await getCategories()
    setCategories(response)
  }

  const loadFilterResults = (newFilters) => {
    getFilteredProducts(0, limit, newFilters).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setFilteredResults(data.data)
        setSize(data.size)
        setSkip(0)
      }
    })
  }

  useEffect(() => {
    init()
    if (searchValue.length < 1) {
      loadFilterResults(myFilters.filters)
    } else {
      setFilteredResults(searchValue)
      setSize(searchValue.length)
    }
  }, [searchValue])

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }

    loadFilterResults(myFilters.filters)
    // setMyFilters(newFilters)
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

  const laodMore = () => {
    const setPage = skip + limit
    
    getFilteredProducts(setPage, limit, myFilters.filters).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setFilteredResults([...filteredResults, ...data.data])
        setSize(data.size)
        setSkip(setPage)
      }
    })
  }
  
  return (
    <Layout
      title="Shop page"
      description="search and find your favorite books"
    >
      <Row>
        <Col size={2}>
          <ul>
            <h5>Filter by category</h5>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, 'category')}
            />
          </ul>
          <ul>
            <h5>Filter by Price</h5>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, 'price')}
            />
          </ul>
        </Col>
        <Col size={10}>
          <Grid template="1fr 1fr 1fr 1fr" gap="40px 0%">
            {filteredResults.length !== 0 ? filteredResults.map(product => (
              <Card key={product._id} product={product} />
            )) : <div style={{ textAlign: 'left', width: '200%' }}>
              <h5>No products found!</h5>
              <p>Please change Your search criteria and try again.
                If still not finding anything relevant,
                please visit home page and try out some of our bestsellers!
              </p>
            </div>}
          </Grid>
          {size > 0 && size >= limit && (
            <ButtonLoadMore onClick={() => laodMore()}>Load more...</ButtonLoadMore>
          )}
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
