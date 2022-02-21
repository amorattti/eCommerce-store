import React from 'react'

const RadioBox = ({ prices, handleFilters }) => {

  const handleChange = (e) => {
    handleFilters(e.target.value)
  }

  return prices.map((price, i) => (
    <li key={i}>
      <input
        id={price.name}
        onChange={handleChange}
        value={`${price._id}`}
        name={price}
        type="radio" />
      <label htmlFor={price.name}>{price.name}</label>
    </li>
  ))
}

export default RadioBox
