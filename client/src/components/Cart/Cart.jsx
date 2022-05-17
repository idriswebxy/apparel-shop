import { Container } from "@mui/material"
import React, { useState, useEffect } from "react"
import CartDivider from "./CartDivider"

const Cart = (props) => {
  const [cart, setCart] = useState([])

  useEffect(() => {}, [])

  return (
    <Container>
      <CartDivider />
    </Container>
  )
}

export default Cart
