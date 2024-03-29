import React, { useState, useEffect, useContext } from 'react'
import { getCategories, getFilteredProducts } from '../../apiCore'
import { prices } from '../../fixedPrices'
import Layout from '../../../hoc/Layout'
import Checkbox from '../../../components/Checkbox'
import RadioBox from '../../../components/RadioBox'
import Card from '../../../components/Card/Card'
import { IoFilterSharp } from 'react-icons/all'
import { BsArrowLeftShort } from 'react-icons/bs'
import { MdOutlineReadMore } from 'react-icons/all'
import { Helmet } from "react-helmet";

import {
  ButtonLoadMore,
  Row,
  FiltersHeader,
  Carts, MenuBar,
  ContentBar,
  ToggleFilter,
  ButtonBox
} from './style'
import { ConfigContext } from '../../../App'

const Shop = () => {
  const { searchResults, searchName, setSearchName } = useContext(ConfigContext)

  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  })
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const [size, setSize] = useState(0)
  const [filteredResults, setFilteredResults] = useState([])

  const [showBar, setShowBar] = useState(true)

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
    if (searchResults.length < 1) {
      loadFilterResults(myFilters.filters)
    } else {
      setFilteredResults(searchResults)
      setSize(searchResults.length)
    }
    return () => setSearchName('TechBooks - news ')
  }, [searchResults])

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }

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
      description="find a book that will meet your expectations"
    >
      <Helmet>
        <title>{searchName}</title>
      </Helmet>

      <Row>
        <MenuBar showBar={showBar}>
          <ToggleFilter
            title="Filters"
            showBar={showBar}
            onClick={() => setShowBar(prevState => !prevState)}
          >
            <div>
              <MdOutlineReadMore size='35px' />
            </div>
          </ToggleFilter>
          <FiltersHeader
            showBar={showBar}
            onClick={() => setShowBar(prevState => !prevState)}
          >
            <div>
              <IoFilterSharp size='20px' />
            </div>
            <div>Filters</div>
            <div>
              <BsArrowLeftShort size='30px' />
            </div>
          </FiltersHeader>
          <ContentBar showBar={showBar}>
            <ul>
              <h5>by category</h5>
              <Checkbox
                categories={categories}
                handleFilters={(filters) => handleFilters(filters, 'category')}
              />
            </ul>
            <ul>
              <h5>by price</h5>
              <RadioBox
                prices={prices}
                handleFilters={(filters) => handleFilters(filters, 'price')}
              />
            </ul>
          </ContentBar>
        </MenuBar>
        <Carts>

          {filteredResults.length !== 0 ? filteredResults.map(product => (
            <Card key={product._id} product={product} />
          )) : <div style={{ textAlign: 'left', width: '100%', marginLeft: '80px', minHeight: '675px' }}>
            <h5>No products found!</h5>
            <p>Please change Your search criteria and try again.
              If still not finding anything relevant,
              please visit home page and try out some of our bestsellers!
            </p>
          </div>}

          {size > 0 && size >= limit && (
            <ButtonBox>
              <ButtonLoadMore onClick={() => laodMore()}>Load more...</ButtonLoadMore>
            </ButtonBox>
          )}
        </Carts>
      </Row>
    </Layout>
  )
}

export default Shop
