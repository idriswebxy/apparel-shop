import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../api/fetchProducts"

const Products = ({ getProducts }) => {
  const { prod } = getProducts()

  // const dispatch = useDispatch()
  const allProducts = useSelector((state) => {
    return state.allProducts.products
  })

  useEffect(() => {
    console.log("=> " + prod)
  }, [])

  return <div>Product</div>
}

export default Products
