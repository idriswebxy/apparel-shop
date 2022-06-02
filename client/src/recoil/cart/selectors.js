import { selector } from "recoil"
import { cartState } from "./atoms"

export const totalCartItemsState = selector({
  key: "totalCartItemsState",
  get: async ({ get }) => {
    const totalItems = await get(cartState)
    return totalItems.length
  },
})
