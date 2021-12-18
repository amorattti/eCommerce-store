import React, { useState, useEffect } from 'react'
import { getCategories, list } from '../../core/apiCore'
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

  const searchData = () => {
    if(search) {
      list({search: search || undefined, category: category})
      .then(resp => {
        if(resp.error) {
          console.log(resp.error)
        } else {
          setData({...data, results: resp, searched: true})
        }
      })
    }
  }

  const handleChange = (name) => (event) => {
    setData({...data, [name]: event.target.value, searched: false})
  }

  const searchSubmit = (e) => {
    e.preventDefault() 
    searchData()
  }

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span>
        <Input
          type="search"
          onChange={handleChange("search")}
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

