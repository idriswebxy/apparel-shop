const axios = require("axios").default

export const getAllProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products")
  return res.data
}
