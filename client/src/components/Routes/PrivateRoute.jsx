import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ isAuthenticated, children }) => {
  console.log(children)
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute
