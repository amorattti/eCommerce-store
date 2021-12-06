import { API } from "../config"

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