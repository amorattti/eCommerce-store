import React, { useState, useEffect } from 'react'
import { getCategories } from '../../core/apiCore'

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
      <div>
        <span>
        <div>
          <select onChange={handleChange("category")}>
            <option value="all">Pick category</option>
            {categories.map((category, index) => (
              <option value={category._id} key={index}>{category.name}</option>
            ))}
          </select>
        </div>
        <input
          type="search"
          onChange={handleChange}
          placeholder='Search by name'
        />
        <div>
          <button>Search</button>
        </div>
        </span>
    
      </div>
    </form>
  )

  console.log("Search state", { data })
  return (
    <div>
      {searchForm()}
    </div>
  )
}

export default Search

