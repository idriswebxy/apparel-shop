import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Loader from "../Loader/Loader"
// import { addToCart } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { fetchProducts, productState } from "../../store/product"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { selectedProductState } from "../../store/product"
import { loadingState } from "../../store/loader"

const Products = (props) => {
  const [loading] = useAuthState(auth)
  const [isLoading, setIsLoading] = useRecoilState(loadingState)
  const items = useRecoilValue(fetchProducts)
  const setProductState = useSetRecoilState(selectedProductState)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      {isLoading || loading ? (
        <Loader />
      ) : (
        <Product items={items} setProductState={setProductState} />
      )}
    </div>
  )
}

export default Products
