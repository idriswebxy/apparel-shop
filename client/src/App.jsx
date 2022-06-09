import { Routes, Route, Router } from "react-router-dom"
import React, { useState } from "react"
import Home from "./layout/Home/Home"
import LoginForm from "./components/AuthForm/LoginForm"
import RegisterForm from "./components/AuthForm/RegisterForm"
import NavBar from "./components/Menu/NavBar"
import Products from "./components/Products/Products"
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
import CheckOutView from "./layout/CheckOut/CheckOutView"
import Product from "./components/Products/Product"
import { authState } from "./store/auth"
import { useRecoilState } from "recoil"

const App = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  let [alert, setAlert] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)

  useEffect(() => {
    // if (loading) {
    // }
    // setIsAuthenticated(true)
  }, [user, loading])

  return (
    <React.Suspense fallback={<Loader />}>
      {alert ? successAlert : null}
      <NavBar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute isAuthenticated={""}>
              <CheckOutView />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
