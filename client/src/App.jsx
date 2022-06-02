import { Routes, Route, Router } from "react-router-dom"
import React, { useState } from "react"
import Home from "./layout/Home/Home"
import Login from "./layout/Auth/Login"
import Register from "./layout/Auth/Register"
import NavBar from "./components/Menu/NavBar"
import Products from "./layout/Products/Products"
import Dashboard from "./layout/Dashboard/Dashboard"
import Loader from "./components/Loader/Loader"
import PrivateRoute from "./components/Routes/PrivateRoute"
import Page404 from "./layout/Page404/Page404"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../src/firebase"
import Cart from "./components/Cart/Cart"
import { successAlert, errorAlert } from "./components/Alert/Alerts"
import { useEffect } from "react"
import { alertSender } from "./utils/alertSender"
import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { authState } from "./recoil/auth/atoms"

const App = () => {
  const [user, loading, authenticated] = useAuthState(auth)
  const navigate = useNavigate()
  let isAuthenticated = useRecoilValue(authState)
  let setAuth = useSetRecoilState(authState)
  let [alert, setAlert] = useState(false)
  let cartItems = useRecoilValue(authState)

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    if (user) {
      setAuth(true)
    }
    if (loading) {
      return <Loader />
    }
    console.log(isAuthenticated)
  }, [])

  return (
    <div>
      {alert ? successAlert : null}
      <NavBar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route
          path="/cart"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Cart cartItems={cartItems} />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
