import React, { useEffect } from "react"
import { useRecoilState } from "recoil"
import { authState } from "../../store/auth"

const CheckOut = () => {
  const [isAuth, setAuth] = useRecoilState(authState)

  useEffect(() => {}, [])
  return <h1>CheckOut{isAuth}</h1>
}

export default CheckOut
