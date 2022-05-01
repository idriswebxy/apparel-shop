import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import "./Dashboard.css"
import { auth, db } from "../../firebase"
import { query, collection, getDocs, where } from "firebase/firestore"
import { signOut } from "firebase/auth"
import Spinner from "../Loader/Spinner"

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return <Spinner />
    if (!user) return navigate("/login")
  }, [user, loading])

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
