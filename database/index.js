const { Pool } = require("pg")

const pool = new Pool({
  user: "idris",
  host: "localhost",
  database: "apparel_db",
  password: "",
  port: 5432,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack)
  }
  client.query("SELECT NOW()", (err, result) => {
    release()
    if (err) {
      return console.error("Error executing query", err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
