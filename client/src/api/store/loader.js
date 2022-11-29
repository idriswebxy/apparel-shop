import { atom } from "recoil"

export const loadingState = atom({
  key: "loadingState",
  default: true,
})

// export const setLoaderOff = selector({
//   key: "setLoaderOff",
// })
