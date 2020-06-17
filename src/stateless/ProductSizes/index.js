import React from "react";
//
import "./styles.scss"

function ProductSizes({ availableSizes, handleSizeSelect, sizeSelected }) {
  return (
    <div className="product__sizes">
      {availableSizes.map((size) => (
        <button
          key={size.sku}
          className={`product__size ${
            sizeSelected === size ? "product__size--selected" : ""
          }`}
          onClick={() => handleSizeSelect(size)}
        >
          {size.size}
        </button>
      ))}
    </div>
  );
}

export default ProductSizes;
