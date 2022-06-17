import { Routes, Route, Router } from "react-router-dom"
import React, { Suspense, useState } from "react"
import Home from "./container/Home/Home"
import Login from "./components/AuthForm/LoginForm"
import Register from "./components/AuthForm/RegisterForm"
import NavBar from "./components/Menu/NavBar"
import Products from "./components/Products/Products"
import Dashboard from "./container/Dashboard/Dashboard"
import Loader from "./components/Loader/Loader"
import PrivateRoute from "./components/Routes/PrivateRoute"
import Page404 from "./container/Page404/Page404"
import ProductDetail from "./components/Products/ProductDetail"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../src/firebase"
import CartPage from "./container/Cart/CartPage"
import { successAlert, errorAlert } from "./components/Alert/Alerts"
import { useEffect } from "react"
import { alertSender } from "./utils/alertSender"
import { useNavigate } from "react-router-dom"

const App = () => {
  const [user, loading, authenticated] = useAuthState(auth)
  const navigate = useNavigate()

  let [alert, setAlert] = useState(false)

  useEffect(() => {
    // if (!user) {
    //   navigate("/login")
    // }
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      {alert ? successAlert : null}
      <NavBar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route element={<PrivateRoute isAuthenticated={true} />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Suspense>
  )
}

export default App
