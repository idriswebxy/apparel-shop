import { Container } from "@mui/material"
import React, { useState, useEffect } from "react"
import CartDivider from "./CartDivider"
import { auth } from "../../firebase"
import Loader from "../Loader/Loader"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRecoilValue } from "recoil"
import { authState } from "../../recoil/auth/atoms"

const Cart = (props) => {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const [user, loading] = useAuthState(authState)
  // const stateAuth = useRecoilValue()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    if (loading) {
      return <Loader />
    }
  }, [])

  return (
    <Container>
      <CartDivider cart={cart} />
    </Container>
  )
}

export default Cart
