import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Loader from "../Loader/Spinner"

const Products = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllProducts = async () => {
    await axios.get("/api/products").then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return isLoading ? <Loader /> : <Product items={items} />
}

export default Products
