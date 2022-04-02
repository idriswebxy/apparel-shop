import React, { createContext, useState } from "react"

const UserContext = createContext(undefined)
const UserDispatchContext = createContext(undefined)

function Login({ children }) {
  const [msg, setMsg] = useState({
    msgTxt: "Testing",
  })

  return (
    <UserContext.Provider value={msg}>
      <UserDispatchContext.Provider value={setMsg}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

export { Login, UserContext, UserDispatchContext }
