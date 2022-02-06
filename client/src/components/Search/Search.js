import React, { useState, useEffect, useContext } from 'react'
import { getCategories, list } from '../../core/apiCore'
import {
  SearchContainer,
  Select,
  Input,
  ButtonSearch
} from './style'

import { SearchContext } from '../../App'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const { setSearchValue, searchValue } = useContext(SearchContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    searched: false
  })

  const { categories, category, search, searched } = data
  let location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/shop' && searchValue.length !== 0) {
      // clear data to default in shop page and claer input value
      setSearchValue([])
      setData({ ...data, search: "" })
    }
  }, [location.pathname])

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
        setData({ ...data, searched: true })

        if (resp.length > 0) {
          setSearchValue(resp)
          navigate('/shop')
        } else {
          navigate('/asdasdsda')
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
        <Input
          type="search"
          value={search}
          onChange={handleChange("search")}
          placeholder='Search by name'
        />
      </span>
      <span>
        <Select onChange={handleChange("category")}>
          <option value="all">category</option>
          {categories.map((category, index) => (
            <option value={category._id} key={index}>{category.name}</option>
          ))}
        </Select>
      </span>
      <span>
        <ButtonSearch>
          <FiSearch/>
        </ButtonSearch>
      </span>
    </form>
  )

  return (
    <SearchContainer>
      {searchForm()}
    </SearchContainer>
  )
}

export default React.memo(Search)

