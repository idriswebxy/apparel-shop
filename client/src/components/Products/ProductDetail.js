import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { fetchProducts, productState } from "../../api/store/product"
// import { selectedProductState } from "../../store/product"

const ProductDetail = () => {
  const product = useRecoilValue(fetchProducts)

  useEffect(() => {
    console.log(product)
  }, [])

  return <div>ProductDetail</div>
}

export default ProductDetail
