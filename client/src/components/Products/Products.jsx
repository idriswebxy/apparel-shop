import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Loader from "../Loader/Loader"
import { addToCart } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Products = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, loading, error] = useAuthState(auth)

  const getAllProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Product items={items} addToCart={addToCart} userId={user.uid} />
    </div>
  )
}

export default Products
