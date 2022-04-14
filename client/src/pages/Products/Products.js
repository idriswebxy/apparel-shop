import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
// import { getProductsApi, useGetAllProducts } from "../../api/fetchProducts"
// import { getAllProducts } from "../../api/fetchProducts".
const Products = () => {
  const [items, setItems] = useState([])

  const getAllProducts = async () => {
    await axios.get("/api/products").then((res) => setItems(res.data))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <Product items={items} />
    </div>
  )
}

export default Products
