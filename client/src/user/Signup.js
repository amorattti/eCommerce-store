import React, { useState } from 'react'
import Layout from '../hoc/Layout'
import { Link } from 'react-router-dom'
import { signup } from '../auth'
import { EntryPage, PageHeader } from './style'
import EntryCard from '../components/EntryCard'
import InputGroup from '../components/InputGroup'
import Input from '../components/Input'
import Button from '../components/Button'

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
    // <form>
    //   <div className="form-group">
    //     <label className="text-muted">Name</label>
    //     <input
    //       onChange={handleChange('name')}
    //       type="text"
    //       className="form-control"
    //       value={name}
    //     />
    //   </div>

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
      <PageHeader to="/">LOGO </PageHeader>
      <EntryCard>
        <form>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input type="password" />
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
    <Layout title="Sign up" >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  )
}

export default Signup

