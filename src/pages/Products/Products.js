import React, { useEffect, useState } from "react"
import { getProducts } from "../../actions/product"
import { connect } from "react-redux"

const Products = ({ items, getProducts }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
    setProducts(items)
  }, [])

  return <div>Products</div>
}

const mapStateToProps = (state) => ({
  items: state.products,
})

export default connect(mapStateToProps, { getProducts })(Products)
