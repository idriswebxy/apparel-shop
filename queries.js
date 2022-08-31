const Pool = require("pg").Pool
const pool = new Pool({
  user: "newuser",
  host: "localhost",
  database: "api",
  password: "password",
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

const getCart = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCartByID = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addToCart = () => {
  // const { name, email } = request.body
  console.log("Add exe❌")
  pool.query("SELECT * FROM cart WHERE id = 1", (error, results) => {
    if (error) {
      throw error
    }
    // response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

addToCart()

const updateCart = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteCartItem = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getCart,
  getCartByID,
  addToCart,
  updateCart,
  deleteCartItem,
}
