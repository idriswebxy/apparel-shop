import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ isAuthenicated, children }) => {
  if (!isAuthenicated) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default PrivateRoute
