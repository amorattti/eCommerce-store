import { API } from "../config"

export const readUser = async (userId, token) => {
  try {
    const response = await fetch(`${API}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return response.json()

  } catch (error) {
    console.log('error', error)
  }
}

export const updateUser = async (userId, token, user) => {
  try {
    const response = await fetch(`${API}/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(user)
    })
    return response.json()

  } catch (error) {
    console.log('error', error)
  }
}

export const updateUserLS = (user, next = () =>{}) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      let auth = JSON.parse(localStorage.getItem('jwt'))
      auth.user = user
      localStorage.setItem('jwt', JSON.stringify(auth))
      next()
    }
  }
}