import React from "react";
//
import "./styles.scss"
import CardProduct from "../CardProduct"

function SimilarProducts({ data }) {
  return (
    <div className="product__similar">
      <h3>Produtos similares</h3>
      <div className="product__similar__cards">
        {data.map((product, i) => (
          <CardProduct product={product} key={product.name + i} />
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
