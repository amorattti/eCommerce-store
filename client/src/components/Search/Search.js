import React, { useState, useEffect, useContext } from 'react'
import { getCategories, list } from '../../core/apiCore'
import {
  SearchContainer,
  Select,
  Input,
  ButtonSearch,
  Row
} from './style'

import { SearchContext } from '../../App'

import Card from '../Card'
import { useNavigate } from 'react-router-dom'


const Search = () => {
  const { setSearchValue } = useContext(SearchContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false
  })

  const { categories, category, search, results, searched } = data

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const categories = await getCategories()
    if (categories.error) {
      console.log(categories.error, 'error')
    }
    setData({ ...data, categories: categories })
  }

  const searchData = async () => {
    if (search) {
      try {
        const resp = await list({ search: search || undefined, category: category })
        setData({ ...data, results: resp, searched: true })

        if (resp.length > 0) {
          setSearchValue(resp)
          navigate('/shop')
        }
      } catch (error) {
        console.log(error)
      } 
    } 
  }

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false })
  }

  const searchSubmit = (e) => {
    e.preventDefault()
     searchData()
  }

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span>
        <Select onChange={handleChange("category")}>
          <option value="all">All categories</option>
          {categories.map((category, index) => (
            <option value={category._id} key={index}>{category.name}</option>
          ))}
        </Select>
      </span>
      <span>
        <Input
          type="search"
          onChange={handleChange("search")}
          placeholder='Search by name'
        />
      </span>
      <span>
        <ButtonSearch>Search</ButtonSearch>
      </span>
    </form>
  )

  // const searchMessage = (results) => {
  //   if (searched && results.length > 0) {
  //     return `${results.length} products have found `
  //   }
  //   if (searched && results.length < 1) {
  //     return `Products not Found`
  //   }
  // }

  // const searchResults = (results = []) => {
  //   return (
  //     <Row>
  //       <h2>{searchMessage(results)}</h2>
  //       {results.length > 0 && searched && results.map(product =>
  //         <Card key={product._id} product={product} />)}
  //     </Row>
  //   )
  // }


  return (
    <SearchContainer>
      {searchForm()}
      {/* {searchResults(results)} */}
    </SearchContainer>
  )
}

export default Search

