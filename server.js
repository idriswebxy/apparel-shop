const express = require("express")
const app = express()
const cors = require("cors")
var admin = require("firebase-admin")

var serviceAccount = require("./service/clothing-store-76c58-firebase-adminsdk-xebij-d1fd355e43.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clothing-store-76c58-default-rtdb.firebaseio.com",
})

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database()
var ref = db.ref("/users")
ref.once("value", function (snapshot) {
  console.log(snapshot.val())
})

app.use(cors())

app.use(express.json({ extended: false }))

app.use("/api/products", require("./routes/api/products"))

app.get("/", (req, res) => {
  res.send("Server Test")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
