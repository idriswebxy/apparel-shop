const express = require("express")
const router = express.Router()
const axios = require("axios").default
// const pool = require("../../queries")
const bcrypt = require("bcrypt")
const { response } = require("express")
// const Pool = require("pg").Pool
const pool = require("../../database/index.js")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")

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

router.post(
  "/register",
  [
    check("email", "Please enter a valid email!").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters!"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
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
          console.log(results)
        }
      )
    } catch (error) {
      res.status(500).send("Error Registering User!")
    }
  }
)

router.get("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    pool.query(
      `SELECT email FROM users WHERE email = ${email}`,
      (error, results) => {
        if (error) {
          throw error
        }
        res.send(200).json(results)
      }
    )
  } catch (error) {}
})

router.get("/all_users", async (req, res) => {
  console.log("all userssss")
  await pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

module.exports = router
