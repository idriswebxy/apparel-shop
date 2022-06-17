import axios from "axios"
import { atom, selector } from "recoil"

export const productState = atom({
  key: "product",
  defualt: [],
})

export const fetchProducts = atom({
  key: "fetchProduct",
  default: selector({
    key: "fetchAllProductsApi",
    get: async ({ get }) => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        return res.data
      } catch (error) {
        console.error(error)
      }
    },
  }),
})

export const selectedProductState = atom({
  key: "selectedProductState",
  default: null,
})
