import React, { useContext } from "react"
import { UserContext, UserDispatchContext } from "../../contexts/Login"

export default function SignIn() {
  const userDetails = useContext(UserContext)
  const setUserDetails = useContext(UserDispatchContext)

  return <div>{userDetails}</div>
}
