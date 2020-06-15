import React from "react";
//
import ProductCard from "../ProductCard";

function Products({ data }) {
  return (
    <div className="main__products">
      {data.map((product, i) => (
        <ProductCard product={product} key={product.name + i} />
      ))}
    </div>
  );
}

export default Products;
