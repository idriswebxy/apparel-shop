import axios from "axios"
import { atom, selector } from "recoil"

export const productState = atom({
  key: "productState",
  default: selector({
    key: "fetchAllProducts",
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
