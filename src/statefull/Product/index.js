import React from 'react';
import { useParams } from "react-router-dom"
//
import "./styles.scss"

function Product() {
  const { product } = useParams()
  return (
    <div className="product">
      Produto: {product}
    </div>
  );
}

export default Product;
