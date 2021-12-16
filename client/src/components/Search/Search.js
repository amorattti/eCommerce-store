import React, { useState, useEffect } from 'react'
import { getCategories } from '../../core/apiCore'
import {
  SearchContainer,
  Select,
  Input,
  ButtonSearch
} from './style'

const Search = () => {
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

  const handleChange = () => {

  }

  const searchSubmit = () => {

  }

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span>
        <Input
          type="search"
          onChange={handleChange}
          placeholder='Search by name'
        />
      </span>
      <span>
        <Select onChange={handleChange("category")}>
          <option value="all">All categories</option>
          {categories.map((category, index) => (
            <option value={category._id} key={index}>{category.name}</option>
          ))}
        </Select>
      </span>
      <span>
        <ButtonSearch>Search</ButtonSearch>
      </span>
    </form>
  )

  console.log("Search state", { data })
  return (
    <SearchContainer>
      {searchForm()}
    </SearchContainer>
  )
}

export default Search

