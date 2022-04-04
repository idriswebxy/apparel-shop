import axios from "axios"
import { GET_PRODUCTS } from "./types"

export const getProducts = () => async (dispatch) => {
  try {
    const resp = await axios.get("https://fakestoreapi.com/products")
    dispatch({
      type: GET_PRODUCTS,
      payload: resp.data,
    })
  } catch (err) {
    console.error(err)
  }
}
