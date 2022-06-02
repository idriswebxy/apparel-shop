import { atom } from "recoil"

export const cartState = atom({
  key: "cartState",
  totalItemsCart: [],
  default: 0,
})
