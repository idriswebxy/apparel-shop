import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Loader from "../Loader/Loader"
import { addToCart } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAllProducts, productState } from "../../store/product"
import { useRecoilValue } from "recoil"

const Products = (props) => {
  // const [isLoading, setIsLoading] = useState(true)
  const [user, loading, error] = useAuthState(auth)

  return (
    <div>
      <Product items={props.items} addToCart={addToCart} userId={user.uid} />
    </div>
  )
}

export default Products
