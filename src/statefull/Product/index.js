import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import ProductCard from "../../stateless/ProductCard";
import { placeholder } from "../../services/utils";

function Product() {
  const { productId } = useParams()
  const { products } = useSelector(state => state.products)
  const product = products.find((prod) => prod.id === productId)


  return !product ? (
    <Loading/>
  ) : (
    <>
    <div className="container">
      <div className="product">
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
            <button className="product__size product__size--selected" selected>
              P
            </button>
            <button className="product__size">M</button>
            <button className="product__size">G</button>
            <button className="product__size">GG</button>
          </div>
          <div className="product__add-cart">
            <button>Adicionar à cesta</button>
          </div>
          <div className="product__description">
            Descrição não fornecida pelo fabricante.
          </div>
        </div>
      </div>
      <div className="product__similar">
        <h3>Produtos similares</h3>
        <div className="product__similar__cards">
          {
            products.slice(0,4).map((product, i) => <ProductCard product={product} key={product.name+i}/>)
          }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Product;
