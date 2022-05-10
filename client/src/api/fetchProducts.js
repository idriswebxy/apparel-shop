import axios from "axios"

export const fetchProducts = async () => {
  let res = await axios
    .get("/api/products")
    .then((res) => res.data)
    .catch((err) => console.error(err))
  return res
}
