const express = require("express")
const router = express.Router()
const axios = require("axios").default

router.get("/all_products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products")
    res.json(response.data)
  } catch (error) {
    console.error(error)
  }
})

router.get("/add_item", async (req, res) => {})

module.exports = router
