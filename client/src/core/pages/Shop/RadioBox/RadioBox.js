import React, { useState, useEffect } from 'react'

const RadioBox = ({prices}) => {
  const [value, setValue] = useState(0)

  const handleChange = () => {
    
  }

  return prices.map((price, i) => (
    <li key={i}>
      <input 
      onChange={handleChange}
      value={`${price._id}`}
      type="radio" />
      <label>{price.name}</label>
    </li>
  ))
}

export default RadioBox
