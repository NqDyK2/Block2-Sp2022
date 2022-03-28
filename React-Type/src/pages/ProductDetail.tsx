import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
    const { _id } = useParams();
    console.log(_id);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail