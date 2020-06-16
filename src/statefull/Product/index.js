import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import { FaHeart } from 'react-icons/fa';
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import SimilarProducts from "../../stateless/SimilarProducts";
import { placeholder, strPriceToNum } from "../../services/utils";
import { addProductCart } from "../../actions";
const idxSimilares = Math.round(Math.random()*18)

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, fetchProductsError } = useSelector(state => state.products);
  const product = products.find((prod) => prod.id === productId);
  const availableSizes = product?.sizes.filter((size) => size.available);
  const [sizeSelected, setSizeSelected] = useState(null);
  
  const handleAddCart = () => {
    if (!sizeSelected) {
      toast.error("Por favor selecione um tamanho!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
      return;
    }
    const handledProduct = {...product}
    handledProduct.size = sizeSelected.size;
    handledProduct.sku = sizeSelected.sku;
    handledProduct.actual_price = strPriceToNum(handledProduct.actual_price)
    dispatch(addProductCart(handledProduct))
    toast.success("Oba! Produto adicionado! :D", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if(availableSizes?.length === 1) setSizeSelected(availableSizes[0])
  }, [availableSizes])

  return !product ? (
    <>
      {
        fetchProductsError && (
        <p className="fetch-error">
          Ops, algo deu errado! Por favor recarregue a página. :)
        </p>
        )
      }
      <Loading/>
    </>
  ) : (
    <>
    <div className="container">
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
            <button onClick={handleAddCart}>Adicionar à cesta</button>
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
