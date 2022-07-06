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
      const res = await axios.get("/api/products/all_products")
      // await productState.push(res.data)
      return res.data
    },
  }),
})

export const setProductState = selector({
  key: "setProductState",
  default: [],
  get: async ({ get }) => {
    const state = await get(productState)
    return state
  },
})

// export const selectedProductState = selector({
//   key: "selectedProductState",

// })
