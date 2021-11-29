import { API } from "../config"

export const getsProducts = async (sortBy) => {
  try {
    const url = `${API}/products?sortBy=${sortBy}&order=desc&limit=6`
    const response = await fetch(url,{method: "GET"})

    return response
  } catch (error) {
    console.log(error)
  }
}