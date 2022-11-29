import React, { useEffect, useState } from "react"
import Products from "../../components/Products/Products"
import { useAuthState } from "react-firebase-hooks/auth"
import { addToCart, auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import { authState } from "../../api/store/auth"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import axios from "axios"
import { getAllProducts, productState } from "../../api/store/product"
import { loadingState } from "../../api/store/loader"

const Dashboard = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  // const authz = useRecoilValue(authState)
  const setIsLoading = useSetRecoilState(loadingState)
  const [items, setItems] = useState([])

  // const getAllProducts = async () => {
  //   await axios.get("https://fakestoreapi.com/products").then((res) => {
  //     setItems(res.data)
  //     // setIsLoading(false)
  //   })
  // }

  useEffect(() => {
    // getAllProducts()
    console.log(items)
  }, [])

  return (
    <div>
      <Products items={items} addToCart={addToCart} />)
    </div>
  )
}
export default Dashboard
