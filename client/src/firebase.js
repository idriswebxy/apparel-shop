// Your web app's Firebase configuration
import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {
  getDatabase,
  set,
  ref,
  child,
  get,
  push,
  update,
} from "firebase/database"
import { alertSender } from "./utils/alertSender"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
const database = getDatabase(app)

const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase()
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
}

const userId = "01"

const dbRef = ref(getDatabase())
get(child(dbRef, `users/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val())
    } else {
      console.log("No data available")
    }
  })
  .catch((error) => {
    console.error(error)
  })

const writeNewPost = (uid, username, picture, title, body) => {
  const db = getDatabase()

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  }

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), "posts")).key

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {}
  // updates["/posts/" + newPostKey] = postData
  updates["/users" + uid + "/" + newPostKey] = postData

  return update(ref(db), updates)
}

// const provider = new GoogleAuthProvider()

// Sign UP user with firebase
export const signUpUser = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}

// Sign IN user with firebase
export const signInUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alertSender(errorCode, errorMessage)
    })
}

export const logOut = () => {
  signOut(auth)
}
