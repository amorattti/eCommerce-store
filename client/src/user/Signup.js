import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../auth'
import { EntryPage } from './style'
import EntryCard from '../components/EntryCard_Styles'
import InputGroup from '../components/InputGroup_Styles'
import Input from '../components/Input_Styles'
import Button from '../components/Button'
import Alert from '../components/Alert'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false 
  })

  const { name, email, password, error, success } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    signup({ name, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <EntryPage>
      <EntryCard>
        <h2>
          Sign up
        </h2>
        <form onSubmit={clickSubmit}>
          <InputGroup>
            <label>Full Name</label>
            <Input
              onChange={handleChange('name')}
              type="text"
              value={name}
            />
          </InputGroup>
          <InputGroup>
            <label>Email Address</label>
            <Input
              onChange={handleChange('email')}
              type="text"
              value={email}
            />
          </InputGroup>
          <InputGroup>
            <label >Password</label>
            <Input
              onChange={handleChange('password')}
              type="password"
              value={password}
            />
          </InputGroup>
          <Button type="submit">Sign up</Button>
        </form>
        <span>
          Already have an account?
          <Link to="/signin">Sign in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      {error}
    </Alert>
  )

  const showSuccess = () => (
    <Alert value={success} theme="success">
      new account is created. Please sign in <Link to="/signin">Signin</Link>
    </Alert>
  )

  return (
    <>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </>
  )
}

export default Signup

