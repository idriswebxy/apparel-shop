import React, { useEffect, useState } from "react"
import Products from "../../components/Products/Products"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import { authState } from "../../recoil/auth/atoms"
import { userAuthState } from "../../recoil/auth/selectors"

export default function Dashboard() {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)
  const setAuth = useSetRecoilState(authState)
  let authz = useRecoilValue(authState)

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
    console.log(authz)
  }, [])

  return (
    <div>
      <Products />
    </div>
  )
}
