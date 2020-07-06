import React from "react";
import { useSelector } from "react-redux";
//
import "./styles.scss";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";
import CardProduct from "../../statefull/CardProduct";
import SearchInput from "../SearchInput";

function Main() {
  const { loading, products, fetchProductsError, searching } = useSelector(
    (state) => state.products
  );

  return (
    <div className="main">
      <SearchInput />
      {fetchProductsError && (
        <p className="fetch-error">
          Ops, algo deu errado! Por favor recarregue a página. :)
        </p>
      )}
      {loading || searching ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="main__products">
              {products[0] ? (
                products.map((product, i) => (
                  <CardProduct product={product} key={product.id} />
                ))
              ) : (
                <p className="fetch-error">
                  Nenhum resultado, tente refinar a sua busca. :)
                </p>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
