// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import

// Add the Firebase products that you want to use
import "firebase/compat/auth"
import "firebase/compat/firestore"

const apiKey = process.env.API_KEY

const firebaseConfig = {
  apiKey: { apiKey },
  authDomain: "clothing-store-76c58.firebaseapp.com",
  projectId: "clothing-store-76c58",
  storageBucket: "clothing-store-76c58.appspot.com",
  messagingSenderId: "945228809735",
  appId: "1:945228809735:web:5ac34582b99ec28bd38ca2",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const ref = firebase.firestore().collection("products")
export const imgRef = firebase.firestore().collection("img")
export const socialRef = firebase.firestore().collection("social")
