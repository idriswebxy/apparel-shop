import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { selectedProductState } from "../../store/product"

const ProductDetail = () => {
  const product = useRecoilValue(selectedProductState)

  useEffect(() => {
    console.log(product)
  }, [])

  return <div>ProductDetail</div>
}

export default ProductDetail
