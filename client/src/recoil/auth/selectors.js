import { selector } from "recoil"
import { authState } from "./atoms"

export const userAuthState = selector({
  key: "userAuthState",
  get: ({ get }) => {
    const isAuthenticated = get(authState)
    return isAuthenticated
  },
})

export const setUserAuthState = selector({
  key: "setUserAuthState",
  get: ({ get }) => {
    get(authState)
  },
  set: ({ set }, newValue) => {
    set(authState, (newValue = true))
  },
})
