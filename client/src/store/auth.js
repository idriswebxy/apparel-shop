import { atom, selector } from "recoil"
import axios from "axios"

export const authState = atom({
  key: "authState",
  default: false,
})

export const userState = atom({
  key: "userState",
  default: "",
})

export const testServer = atom({
  key: "testServer",
  get: ({ get }) => {
    return fetch("api/auth/all_users")
  },
})

export const registerUser = atom({
  key: "registerUser",
  default: selector({
    key: "registerUserApi",
    get: async ({ get }) => {
      const res = await axios.post("/api/auth/register")
      return res.data
    },
  }),
})
