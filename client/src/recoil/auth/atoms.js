import { atom } from "recoil"

export const authState = atom({
  key: "authState",
  isAuthenticated: false,
  default: false,
})
