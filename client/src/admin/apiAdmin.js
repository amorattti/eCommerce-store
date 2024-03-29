import { API } from "../config";

/** CATEGORIES */

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

export const createProduct = async (userId, token, formData) => {
  try {
    const response = await fetch(`${API}/product/create/${userId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
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

/** ORDERS */

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

export const fetchOrdersStatus = async (userId, token) => {
  try {
    const response = await fetch(`${API}/order/status-values/${userId}`, {
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

export const updateOrderStatus = async (userId, token, body) => {
  try {
    const resp = await fetch(`${API}/order/update-status/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })
    return resp.json()
  } catch (error) {
    console.log(error)
  }
}

/** PRODUCT */

export const fetchProducts = async (
  token,
  soryBy = 'createdAt',
  order = "asc",
  limit = "0"
) => {
  try {
    const reps = await fetch(`${API}/products?soryBy=${soryBy}&order=${order}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return reps.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async (userId, token, productId, formData) => {
  try {
    const reps = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })
    return reps.json()
  } catch (error) {
    console.log(error)
  }
}

export const removeProduct = async (userId, token, productId) => {
  try {
    const response = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
