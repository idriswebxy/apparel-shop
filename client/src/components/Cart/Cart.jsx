import { Container } from "@mui/material"
import React, { useState, useEffect } from "react"
import CartDivider from "./CartDivider"
import { auth } from "../../firebase"
import Loader from "../Loader/Loader"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const Cart = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    if (loading) {
      return <Loader />
    }
  }, [user, loading])

  return (
    // <Container>
    //   <TableContainer component={Paper}>
    //     <Table sx={{ minWidth: 400 }} aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Items</TableCell>
    //           <TableCell align="right">Price</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {cart.map((row) => (
    //           <TableRow
    //             key={cart.title}
    //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //           >
    //             <TableCell component="th" scope="row">
    //               {cart.title}
    //             </TableCell>
    //             <TableCell align="right">{cart.title}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>
    <div>Cart</div>
  )
}

export default Cart
