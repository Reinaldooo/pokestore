import React from "react";
//
import "./styles.scss"
import ProductCard from "../ProductCard"

function SimilarProducts({ data }) {
  return (
    <div className="product__similar">
      <h3>Produtos similares</h3>
      <div className="product__similar__cards">
        {data.map((product, i) => (
          <ProductCard product={product} key={product.name + i} />
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
