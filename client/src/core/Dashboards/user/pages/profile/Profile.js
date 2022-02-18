import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../../../../auth'
import { readUser, updateUser, updateUserLS } from '../../../../../user/apiUser'
import InputGroup from '../../../../../components/InputGroup_Styles'
import Input from '../../../../../components/Input_Styles'
import Button from '../../../../../components/Button'
import Alert from '../../../../../components/Alert'

const Profile = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: false,
    success: false,
    errorName: ''
  })
  let { userId } = useParams()
  const { token } = isAuthenticated()

  const { name, email, password, error, success, errorName } = values

  const init = async () => {
    try {
      const user = await readUser(userId, token)
      setValues({
        ...values,
        name: user.name,
        email: user.email
      })
    } catch (error) {
      setValues({ ...values, error: true })
    }
  }

  useEffect(() => {
    init(userId)
  }, [userId])


  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = async (event) => {
    event.preventDefault()
    try {
      const newUser = await updateUser(userId, token, { name, email, password })
      updateUserLS({
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        _id: newUser._id
      })
      setValues({ ...values, success: true })

    } catch (error) {
      setValues({ ...values, error: true, errorName: error.message })
    }
  }

  const showSuccess = () => (
    <Alert value={success} theme="success">
      Profile updated successful
    </Alert>
  )

  const showError = () => (
    <Alert value={error} theme="error">
      {errorName}
    </Alert>
  )

  return (
    <div>
      {showSuccess()}
      {showError()}
      <h2>
        Profile Update
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
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}

export default Profile
