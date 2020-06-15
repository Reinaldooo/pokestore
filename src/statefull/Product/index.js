import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FiHeart } from 'react-icons/fi';
// import { FaHeart } from 'react-icons/fa';
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import SimilarProducts from "../../stateless/SimilarProducts";
import { placeholder } from "../../services/utils";
const idxSimilares = Math.round(Math.random()*18)

function Product() {
  const { productId } = useParams()
  const { products } = useSelector(state => state.products)
  const product = products.find((prod) => prod.id === productId)
  const availableSizes = product?.sizes.filter((size) => size.available)
  const [sizeSelected, setSizeSelected] = useState(null)

  useEffect(() => {
    if(availableSizes?.length === 1) setSizeSelected(availableSizes[0])
  }, [availableSizes])

  return !product ? (
    <Loading/>
  ) : (
    <>
    <div className="container">
      { console.log(sizeSelected, "s") }
      <div className="product">
        <div className="product__add-wishlist">
          <button><FiHeart/></button>
        </div>
        <figure className="product__image">
          <img
            src={product.image ? product.image : placeholder}
            alt={product.name}
          />
        </figure>
        <div className="product__content">
          <div className="product__name">{product.name}</div>
          <div className="product__price">
            <span className="product__disc-price">R$ 190</span>
            {product.actual_price}
            <span> {product.installments}</span>
          </div>
          <div className="product__sizes">
            {
              availableSizes.map((size) => (
                <button
                  key={size.sku}
                  className={`product__size ${sizeSelected === size ? "product__size--selected" : ""}`}
                  onClick={() => setSizeSelected(size)}
                >
                  {size.size}
                </button>
              ))
            }
          </div>
          <div className="product__add-cart">
            <button>Adicionar à cesta</button>
          </div>          
          <div className="product__description">
            Descrição não fornecida pelo fabricante.
          </div>
        </div>
      </div>
      <SimilarProducts data={products.slice(idxSimilares, idxSimilares + 4)}/>
    </div>
    <Footer/>
    </>
  );
}

export default Product;
