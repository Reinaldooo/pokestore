import React from "react";
import { useSelector } from "react-redux";
//
import "./styles.scss";
import main from "../../assets/main.jpg";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import CardProduct from "../../stateless/CardProduct";

function Main() {
  const { loading, products, fetchProductsError } = useSelector((state) => state.products);

  return (
    <div className="main">
      <img src={main} className="main__image" alt="promotion" />
      {
        fetchProductsError && (
        <p className="fetch-error">
          Ops, algo deu errado! Por favor recarregue a página. :)
        </p>
        )
      }
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <div className="container">
              <div className="main__products">
                {
                  products[0] && products.map((product, i) => (
                    <CardProduct product={product} key={product.name + i} />
                  ))
                }
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </div>
  );
}

export default Main;
