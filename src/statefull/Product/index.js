import React from "react";
import { Link } from "react-router-dom";
//
import "./styles.scss";
import ImgWithLoader from "../../stateless/ImgWithLoader";

function Product() {
  // const { product } = useParams()
  return (
    <div className="container">
      <div className="product">
        <figure className="product__image">
          <ImgWithLoader
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_611_catalog_1.jpg"
            iWidth="470px"
            iHeight="594px"
            alt=""
          />
        </figure>
        <div className="product__content">
          <div className="product__name">BLUSA LAÇO ISTAMBUL</div>
          <div className="product__price">
            <span className="product__disc-price">R$ 190</span>
            R$ 149,90
            <span> ou 3x R$ 49,97</span>
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
          <Link to="/produto/teste" className="card-wrapper">
            <div className="card">
              <figure className="card__image">
                <ImgWithLoader
                  src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                  alt="test"
                />
              </figure>
              <div className="card__info">
                <div className="card__name">jsdhfgjkhksdjfg</div>
                <div className="card__values">
                  <span className="card__price">
                    <span>R$ 196,00</span>
                    R$ 481
                  </span>
                  <span className="card__installments">3x R$120</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/produto/teste" className="card-wrapper">
            <div className="card">
              <figure className="card__image">
                <ImgWithLoader
                  src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                  alt="test"
                />
              </figure>
              <div className="card__info">
                <div className="card__name">jsdhfgjkhksdjfg</div>
                <div className="card__values">
                  <span className="card__price">
                    <span>R$ 196,00</span>
                    R$ 481
                  </span>
                  <span className="card__installments">3x R$120</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/produto/teste" className="card-wrapper">
            <div className="card">
              <figure className="card__image">
                <ImgWithLoader
                  src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                  alt="test"
                />
              </figure>
              <div className="card__info">
                <div className="card__name">jsdhfgjkhksdjfg</div>
                <div className="card__values">
                  <span className="card__price">
                    <span>R$ 196,00</span>
                    R$ 481
                  </span>
                  <span className="card__installments">3x R$120</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/produto/teste" className="card-wrapper">
            <div className="card">
              <figure className="card__image">
                <ImgWithLoader
                  src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                  alt="test"
                />
              </figure>
              <div className="card__info">
                <div className="card__name">jsdhfgjkhksdjfg</div>
                <div className="card__values">
                  <span className="card__price">
                    <span>R$ 196,00</span>
                    R$ 481
                  </span>
                  <span className="card__installments">3x R$120</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
