import { Routes, Route, Router } from "react-router-dom"
import React, { lazy, Suspense, Fragment, useState } from "react"
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
import CartPage from "./layout/Cart/CartPage"
import { successAlert, errorAlert } from "./components/Alert/Alerts"
import { useEffect } from "react"
import { alertSender } from "./utils/alertSender"
import { writeUserData } from "./api/fetchProducts"

const App = () => {
  const [user, loading, error] = useAuthState(auth)

  let [alert, setAlert] = useState(false)

  useEffect(() => {}, [])

  return (
    <div>
      {alert ? successAlert : null}
      <NavBar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute isAuthenticated={true} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
