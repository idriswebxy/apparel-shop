import { atom, selector } from "recoil"
import axios from "axios"

const userAuthDefault = {
  isAuthenticated: false,
  user: null,
}

export const authState = atom({
  key: "authState",
  default: false,
})

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
    const body = get(userState)
    console.log(body)
    const res = await axios.post("/api/auth/register", body)
    return res.data
  },
})
