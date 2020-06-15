import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//
import "./styles.scss";
import main from "../../assets/main.jpg";
import "../../services/fakeApi";
import ImgWithLoader from "../../stateless/ImgWithLoader";
import Loading from "../../stateless/Loading";
import Footer from "../../stateless/Footer";

function Main() {
  const { loading, products } = useSelector((state) => state.products);

  return (
    <div className="main">
      <img src={main} className="main__image" alt="promotion" />
      {loading ? (
        <Loading />
      ) : (
        <>
        <div className="container">
          <div className="main__products">
            {products.map((t, i) => (
              <Link
                to="/produto/teste"
                className="card-wrapper"
                key={t.name + i}
              >
                <div className="card">
                  <figure className="card__image">
                    <ImgWithLoader
                      src={
                        t.image
                          ? t.image
                          : "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                      }
                      alt="test"
                    />
                  </figure>
                  <div className="card__info">
                    <div className="card__name">{t.name}</div>
                    <div className="card__values">
                      <span className="card__price">
                        <span>R$ 196,00</span>
                        {t.actual_price}
                      </span>
                      <span className="card__installments">
                        {t.installments}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer/>
        </>
      )}
    </div>
  );
}

export default Main;
