import React, { useState } from 'react'
import Layout from '../hoc/Layout'
import { isAuthenticated } from '../auth'
import Button from '../components/Button'
import InputGroup from '../components/InputGroup_Styles'
import Input from '../components/Input_Styles'
import { createCategory } from './apiAdmin'
import Alert from '../components/Alert'
import { useNavigate } from 'react-router'

const AddCategory = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const { user, token } = isAuthenticated()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setError('')
    setName(e.target.value)
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    const response = createCategory(user._id, token, { name })
    response.then(data => {
      if (data.error) {
        console.log(data)
        setError(true)
      } else {
        setError('')
        setSuccess(true)
      }
    })
  }

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit} style={{ margin: 'auto'}}>
      <InputGroup>
        <label>name</label>
        <Input
          style={{ maxWidth: '600px', display: 'block' }}
          type="text"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
        <Button margin="10px 0">Create Category</Button>
      </InputGroup>
    </form>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      Category is should be unique
    </Alert>
  )

  const showSuccess = () => (
    <Alert value={success} theme="success">
      you added new category {name}
    </Alert>
  )


  return (
    <>
      {showError()}
      {showSuccess()}
      {newCategoryForm()}
 
    </ >
  )
}

export default AddCategory
