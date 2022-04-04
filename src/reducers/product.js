import { GET_PRODUCTS } from "../actions/types"

const intialState = {
  products: [],
}

export default function getProduct(state = intialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PRODUCTS:
      return {
        products: [payload, ...state.products],
      }

    default:
      return state
  }
}
