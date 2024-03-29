import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../auth'

import { EntryPage } from './style'
import EntryCard from '../components/EntryCard_Styles'
import InputGroup from '../components/InputGroup_Styles'
import Input from '../components/Input_Styles'
import Button from '../components/Button'
import Alert from '../components/Alert'
import Loader from '../components/LoadingIndicator'

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { email, password, error, loading, redirectToReferrer } = values
  const { user } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    signin({ email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false })
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          })
        })
      }
    })
  }

  const signUpForm = () => (
    <EntryPage>
      <EntryCard>
        <h2>
          Sign in
        </h2>
        <form onSubmit={clickSubmit}>
          <InputGroup>
            <label>Email Address</label>
            <Input
              onChange={handleChange('email')}
              type="email"
              value={email} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="login-password" placeholder="password">Password</label>
            <Input
              onChange={handleChange('password')}
              type="password"
              value={password}
            />
          </InputGroup>
          <Button type="submit" full>Sign in</Button>
          <span>
            Don't have an account?
            <Link to="/signup">Sign up</Link>
          </span>
        </form>
      </EntryCard>
    </EntryPage>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      {error}
    </Alert>
  )

  const showLoading = () => (
    loading && (<div><Loader /></div>)
  )

  const redirectUser = () => {
    if (redirectToReferrer) {
      if(user && user.role === 1) {
        return <Navigate to="/admin/dashboard" />
      } else {
        return <Navigate to="/user/dashboard" />
      }
    }
    if(isAuthenticated()) {
      return <Navigate to="/" />
    }
  }

  return (
    <>
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </>
  )
}

export default Signin

