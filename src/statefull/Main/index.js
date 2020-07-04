import React from "react";
import { useSelector } from "react-redux";
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import CardProduct from "../../stateless/CardProduct";

function Main() {
  const { loading, products, fetchProductsError } = useSelector(
    (state) => state.products
  );

  return (
    <div className="main">
      {fetchProductsError && (
        <p className="fetch-error">
          Ops, algo deu errado! Por favor recarregue a página. :)
        </p>
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="main__products">
              <div className="main__featured">
                <div className="main__featured-cards"></div>
                <div className="main__featured-text"></div>
              </div>
              {products[0] &&
                products.map((product, i) => (
                  <CardProduct product={product} key={product.id} />
                ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
