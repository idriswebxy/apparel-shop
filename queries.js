const { query } = require("./database/index.js")

const getCart = (request, response) => {
  query("SELECT * FROM cart", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
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

const addToCart = (req, res) => {
  // const { userId, cartItem } = req.body

  pool.query(
    `INSERT INTO cart (userid, cartitem) VALUES (142, 'Jurassic Park Book')`,
    (error, results) => {
      if (error) {
        throw error
      }
      results.rows.map((v) => console.log(v))
      res.status(200).json(results.rows)
    }
  )
}

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
