import React from 'react'

const Checkbox = ({ categories }) => {
  return categories.map((category, i) => (
    <li key={i}>
      <input type="checkbox"/>
      <label>{category.name}</label>
    </li>
  ))
}

export default Checkbox
