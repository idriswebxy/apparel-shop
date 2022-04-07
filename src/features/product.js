import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
})

// export const { addProducts } = productSlice.actions

export default productSlice.reducer
