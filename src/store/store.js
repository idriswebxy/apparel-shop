import productReducer from "../features/product"
import { configureStore } from "@reduxjs/toolkit"
import { getProducts } from "../api/fetchProducts"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    [getProducts.reducerPath]: getProducts.reducer,
    allProducts: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProducts.middleware),
})

setupListeners(store.dispatch)
