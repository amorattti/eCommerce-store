import React, { useState } from 'react'
import Layout from '../hoc/Layout'
import { Link } from 'react-router-dom'
import { signin } from '../auth'

import { EntryPage, PageHeader } from './style'
import EntryCard from '../components/EntryCard'
import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import Button from '../components/Button'

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { name, email, password, error, success } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    signin({ email, password }).then(data => {
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
    // <form>
    //   <div className="form-group">
    //     <label className="text-muted">Email</label>
    //     <input
    //       onChange={handleChange('email')}
    //       type="email"
    //       className="form-control"
    //       value={email}
    //     />
    //   </div>

    //   <div className="form-group">
    //     <label className="text-muted">Password</label>
    //     <input
    //       onChange={handleChange('password')}
    //       type="password"
    //       className="form-control"
    //       value={password}
    //     />
    //   </div>
    //   <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
    // </form>
    <EntryPage>
      <EntryCard>
        <h2>
          Sign in
        </h2>
        <form>
          <InputGroup>
            <label htmlFor="login-email" placeholder="email">Email Address</label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="login-password" placeholder="password">Password</label>
            <Input type="text" />
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
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
      new account is created. Please sign in <Link to="/signin">Signin</Link>
    </div>
  )

  return (
    <Layout title="Sign in" >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  )
}

export default Signin

