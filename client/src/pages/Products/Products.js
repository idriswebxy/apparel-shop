import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// import { getProductsApi, useGetAllProducts } from "../../api/fetchProducts"
import { getAllProducts } from "../../api/fetchProducts"

const Products = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    let res = getAllProducts()
    setItems(res)
  }, [])

  return <div></div>
}

export default Products
