import { API } from "../config";

export const createCategory = async (userId, token, category) => {
  try {
    const response = await fetch(`${API}/category/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (userId, token, product) => {
  try {
    const response = await fetch(`${API}/product/create/${userId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: product
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: "GET"
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getListOrders = async (userId, token) => {
  try {
    const response = await fetch(`${API}/order/list/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}