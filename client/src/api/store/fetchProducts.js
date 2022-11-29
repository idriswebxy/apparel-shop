import axios from "axios"
import { getDatabase, ref, set } from "firebase/database"

export const fetchProducts = async () => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      return res.data
    })
    .catch((err) => console.error(err))
}

export const writeUserData = async (userId, name, email, imageUrl) => {
  const db = await getDatabase()
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
}
