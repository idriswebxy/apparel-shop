const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const db = require("./queries")

app.use(cors())

app.use(express.json({ extended: false }))

app.use("/api/products", require("./routes/api/products"))
app.use("/api/auth", require("./routes/api/auth"))

app.get("/", (req, res) => {
  res.send("Server is up ✅")
})

// app.get("/cart", db.getCart)
// app.get("/get_user_cart/:id", db.getCartByID)
// app.post("/add_to_cart", db.addToCart)
// app.put("/update_cart/:id", db.updateCart)
// app.delete("/remove_from_cart/:id", db.deleteCartItem)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
