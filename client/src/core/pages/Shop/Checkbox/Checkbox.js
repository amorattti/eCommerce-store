import React, { useState } from 'react'

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([])

  const handleToggle = (categoryId) => {
    // check if we have our category in checked array
    // and return index or -1
    const currentIndexCategory = checked.indexOf(categoryId)
    const newArrayOfCategories = [...checked]
    
    if(currentIndexCategory === -1) {
      newArrayOfCategories.push(categoryId)
    } else {
      newArrayOfCategories.splice(currentIndexCategory, 1)
    }

    setChecked(newArrayOfCategories)
    handleFilters(newArrayOfCategories )
  }

  return categories.map((category, i) => (
    <li key={i}>
      <input
        type="checkbox"
        value={checked.indexOf(category._id === -1)}
        onChange={() => handleToggle(category._id)}
      />
      <label>{category.name}</label>
    </li>
  ))
}

export default Checkbox
