import axios from "axios"
import { getDatabase, ref, set } from "firebase/database"

export const fetchProducts = async () => {
  let res = await axios
    .get("/api/products")
    .then((res) => res.data)
    .catch((err) => console.error(err))
  return res
}

export const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase()
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
}
