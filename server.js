const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

// app.use(express.json({ extended: false }))

app.use("/api/products", require("./routes/api/products"))

app.get("/", (req, res) => {
  res.send("Server Test")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
