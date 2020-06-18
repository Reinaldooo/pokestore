import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { FiHeart, FiArrowLeftCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import { FaHeart } from 'react-icons/fa';
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import ProductSizes from "../../stateless/ProductSizes";
import SimilarProducts from "../../stateless/SimilarProducts";
import { placeholder, strPriceToCents } from "../../services/utils";
import { addProductCart } from "../../actions";

function Product() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const { products, fetchProductsError } = useSelector(
    (state) => state.products
  );
  // products.find wasn't used here because the index is needed on
  // genSimilar() function
  const prodIdx = products.findIndex((prod) => (prod.id === productId));
  const product = products[prodIdx];
  const availableSizes = product?.sizes.filter((size) => size.available);
  const [sizeSelected, setSizeSelected] = useState(null);

  const genSimilar = () => {
    // The api have exactly 22 products
    return prodIdx > 17 ?
    products.slice(2,6) :
    products.slice(prodIdx+1, prodIdx+5)
  }
  
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
    handledProduct.actual_price = strPriceToCents(handledProduct.actual_price)
    dispatch(addProductCart(handledProduct))
    toast.success("Oba! Produto adicionado! :D", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });
  };

  const handleSizeSelect = (size) => {
    if (size === sizeSelected) {
      setSizeSelected(null);
      return;
    }
    setSizeSelected(size);
  };

  useEffect(() => {
    if(availableSizes?.length === 1) setSizeSelected(availableSizes[0])
  }, [availableSizes])

  return !product ? (
    <>
      {
        fetchProductsError && (
        <p className="fetch-error">
          Ops, algo deu errado! Por favor recarregue a página. :D
        </p>
        )
      }
      <Loading/>
    </>
  ) : (
    <>
    <div className="container">
      <div className="product">
        <div className="product__goback">
          <button onClick={() => history.goBack()}>
            <FiArrowLeftCircle/>
          </button>
        </div>
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
            {
              product.discount_percentage &&
              <span className="product__disc-price">
                {product.regular_price}
              </span>
            }            
            {product.actual_price}
            <span> {product.installments}</span>
          </div>
          <ProductSizes
            availableSizes={availableSizes}
            handleSizeSelect={handleSizeSelect}
            sizeSelected={sizeSelected}
          />
          <div className="product__add-cart">
            <button onClick={handleAddCart}>Adicionar à cesta</button>
          </div>          
          <div className="product__description">
            {product.description || "Descrição não fornecida pelo fabricante."}
          </div>
        </div>
      </div>
      <SimilarProducts data={genSimilar()}/>
    </div>
    <Footer/>
    </>
  );
}

export default Product;
