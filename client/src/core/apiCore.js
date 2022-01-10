import { API } from "../config"
import queryString from 'query-string'

export const getsProducts = async (sortBy) => {
  try {
    const url = `${API}/products?sortBy=${sortBy}&order=desc&limit=5`
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getCategories = async () => {
  try {
    const url = `${API}/categories`
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getFilteredProducts = async (skip, limit, filters = {}) => {
  try {
    const data = {
      limit,
      skip,
      filters
    }

    const response = await fetch(`${API}/products/by/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    return response.json()

  } catch (error) {
    console.log(error)
  }
}

export const list = async (params) => {
  console.log('params before ', params)
  try {
    const query = queryString.stringify(params)

    const url = `${API}/products/search?${query}`
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const fetchProductById = async (_id) => {
  try {
    const url = `${API}/product/${_id}`
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const fetchRelatedProducts = async (_id) => {
  try {
    const url = `${API}/products/related/${_id}`
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

/*--↓----Order ( Dashboard )---↓---*/ 

export const createOrder = async (userId, token, createOrderData) => {
  try {
    const url = `${API}/order/create/${userId}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({ order: createOrderData })
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}


/*--↓----braintree---↓---*/

export const getBraintreeToken = async (userId, token) => {
  try {
    const url = `${API}/braintree/getToken/${userId}`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.json()
  } catch (error) {
    console.log('error', error)
  }
}

export const processPayment = async (userId, token, paymentData) => {
  try {
    const url = `${API}/braintree/payment/${userId}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(paymentData)
    })
    return response.json()
  } catch (error) {
    console.log('error', error)
  }
}