const express = require("express")
const router = express.Router()
const axios = require("axios").default
// const pool = require("../../queries")
const bcrypt = require("bcrypt")
const { response } = require("express")
// const Pool = require("pg").Pool
const pool = require("../../database/index.js")

// const pool = new Pool({
//   user: "idris",
//   host: "localhost",
//   database: "apparel_db",
//   password: "",
//   port: 5432,
// })

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error("Error acquiring client", err.stack)
//   }
//   client.query("SELECT NOW()", (err, result) => {
//     release()
//     if (err) {
//       return console.error("Error executing query", err.stack)
//     }
//     console.log(result.rows)
//   })
// })

router.post("/register", async (req, res) => {
  const { email, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const newPassword = await bcrypt.hash(password, salt)
  try {
    pool.query(
      `INSERT INTO users (email, password) VALUES ('${email}', '${newPassword}')`,
      (error, results) => {
        if (error) {
          throw error
        }
        response.send(200).json(results)
      }
    )
  } catch (error) {
    res.status(500).send("Error Registering User!")
  }
})

router.get("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    pool.query(
      `SELECT email FROM users WHERE email = ${email}`,
      (error, results) => {
        if (error) {
          throw error
        }
        res.sendFile(200).json(results)
      }
    )
  } catch (error) {}
})

router.get("/all_users", async (req, res) => {
  await pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

module.exports = router
