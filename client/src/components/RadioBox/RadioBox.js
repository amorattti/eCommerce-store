import React, { useState, useEffect } from 'react'

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValues] = useState(0)

  const handleChange = (e) => {
    handleFilters(e.target.value)
    setValues(e.target.value)
  }

  return prices.map((price, i) => (
    <li key={i}>
      <input
        onChange={handleChange}
        value={`${price._id}`}
        name={price}
        type="radio" />
      <label>{price.name}</label>
    </li>
  ))
}

export default RadioBox
