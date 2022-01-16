import React, { useState, useEffect } from 'react'
import Layout from '../../hoc/Layout'
import { useLocation, useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth'
import { readUser, updateUser, updateUserLS } from '../apiUser'

const Profile = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })
  let { userId } = useParams()
  const { token } = isAuthenticated()

  const { name, email, password, error, success } = values

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
  }, [])

  console.log('values from profile', values)

  return (
    <Layout>
      hello from profile
    </Layout>
  )
}

export default Profile
