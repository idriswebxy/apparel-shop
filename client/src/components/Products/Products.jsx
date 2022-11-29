import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Loader from "../Loader/Loader"
// import { addToCart } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  fetchProducts,
  productState,
  setProductState,
} from "../../api/store/product"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import { loadingState } from "../../api/store/loader"

const Products = (props) => {
  const [loading, user] = useAuthState(auth)
  const [isLoading, setIsLoading] = useRecoilState(loadingState)
  const [items, setItem] = useRecoilState(fetchProducts)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      {isLoading ? <Loader /> : <Product items={items} setItem={setItem} />}
    </div>
  )
}

export default Products
