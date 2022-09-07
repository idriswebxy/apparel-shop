const express = require("express")
const router = express.Router()
const axios = require("axios").default
const { getCart } = require("../../queries")

var admin = require("firebase-admin")
require("dotenv").config()

var serviceAccount = require("../../service/clothing-store-76c58-firebase-adminsdk-xebij-d1fd355e43.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE,
})

const db = admin.database()

let citRef = db.ref("cities")

router.get("/all_products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products")
    res.json(response.data)
  } catch (error) {
    console.error(error)
  }
})

router.get("/getUserCart", async (req, res) => {
  try {
    getCart(req, res)
  } catch (error) {
    console.error(error)
  }
})

router.get("/add_item", async (req, res) => {
  const data = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  }

  // Add a new document in collection "cities" with ID 'LA'
  res = await db.collection("cities").doc("LA").set(data)
  console.log(res)
  // var test = database.ref("/cart")
})

module.exports = router
