import React, { useState, useEffect, useContext } from 'react'
import { getCategories, list } from '../../core/apiCore'
import {
  SearchContainer,
  Select,
  Input,
  ButtonSearch,
  Form,
  ArrowIcon
} from './style'

import { ConfigContext } from '../../App'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'

const Search = () => {
  const { setSearchResults, searchResults,   
    setSearchName
  } = useContext(ConfigContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    searched: false
  })

  const { categories, category, search } = data
  let location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/shop' && searchResults.length !== 0) {
      // clear data to default in shop page and claer input value
      setSearchResults([])
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
          setSearchResults(resp)
          navigate('/shop')
          setSearchName( `search result for: '${data.search}' - TechBooks`)
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
    <Form onSubmit={searchSubmit}>
      <div>
        <Input
          type="search"
          value={search}
          onChange={handleChange("search")}
          placeholder='Search...'
        />
      </div>
      <div>
        <Select onChange={handleChange("category")}>
          <option value="all">Category</option> 
          {categories.map((category, index) => (
            <option value={category._id} key={index}>{category.name}</option>
          ))} 
        </Select>
        <ArrowIcon/>
      </div>
      <div>
        <ButtonSearch>
          <MdSearch size="2.8rem" />
        </ButtonSearch>
      </div>
    </Form>
  )

  return (
    <SearchContainer>
      {searchForm()}
    </SearchContainer>
  )
}

export default React.memo(Search)

