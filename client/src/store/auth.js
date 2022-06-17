import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export const authState = atom({
  key: "authState",
  default: false,
})

export const userState = atom({
  key: "userState",
  default: null,
})
