import axios from "axios"
import { atom, selector } from "recoil"

export const productState = atom({
  key: "productState",
  default: [],
})

export const fetchProducts = atom({
  key: "fetchProduct",
  default: selector({
    key: "fetchAllProductsApi",
    get: async ({ get }) => {
      let prod = get(productState)
      const res = await axios.get("/api/products/all_products")
      prod = [...res.data]
      return prod
    },
  }),
})
