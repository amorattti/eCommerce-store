import React, { useState } from 'react'

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([])

  const handleToggle = (categoryId) => {
    const currentIndexCategory = checked.indexOf(categoryId) // -1
    const newArrayOfCategories = [...checked] // filters

    if (currentIndexCategory === -1) {
      newArrayOfCategories.push(categoryId)
    } else {
      newArrayOfCategories.splice(currentIndexCategory, 1)
    }
    setChecked(newArrayOfCategories)
    handleFilters(newArrayOfCategories)
  }

  return categories.map((category, i) => (
    <li key={i}>
      <input
        id={category.name}
        type="checkbox"
        value={checked.indexOf(category._id === -1)}
        onChange={() => handleToggle(category._id)}
      />
      <label htmlFor={category.name}>{category.name}</label>
    </li>
  ))
}

export default Checkbox
