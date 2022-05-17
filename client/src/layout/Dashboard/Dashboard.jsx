import React, { useEffect, useState } from "react"
import Products from "../../components/Products/Products"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/Loader/Loader"

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  // @ts-ignore
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    if (loading) {
      return <Loader />
    }
  }, [])

  return (
    <div>
      <Products />
    </div>
  )
}
