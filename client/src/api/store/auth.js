import { atom, selector } from "recoil"
import axios from "axios"

const userAuthDefault = {
  isAuthenticated: false,
  user: null,
}

export const userState = atom({
  key: "userState",
  default: userAuthDefault,
})

export const testServer = atom({
  key: "testServer",
  get: async ({ get }) => {
    return await axios.get("api/auth/all_users")
  },
})

export const registerUser = atom({
  key: "registerUser",
  get: async ({ get }) => {
    const user = get(userState)
    const res = await axios.post("/api/auth/register", user)
    return res.data
  },
})
