import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getProducts = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
  }),
})
