import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa"
//
import "./styles.scss";
import ImgWithLoader from "../../stateless/ImgWithLoader";
import { placeholder, strPriceToNum } from "../../services/utils";
import { AddProductCart } from "../../actions";

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const {
    image,
    name,
    actual_price,
    installments,
    id,
    discount_percentage,
    regular_price,
    sizes
  } = product;

  const handleCartClick = () => {
    const parsedProduct = {...product}
    parsedProduct.actual_price = strPriceToNum(parsedProduct.actual_price)
    dispatch(AddProductCart(parsedProduct))
  }

  return (
    <div className="card-wrapper">
      {
        sizes[0].size === "U" &&
        <span className="card__add" onClick={handleCartClick}>
          <FaCartPlus/>
        </span>
      }
      <Link to={`/produto/${id}`}>
        <div className="card">
          {
            discount_percentage &&
            <span className="card__discount">-{discount_percentage}</span>
          }
          <figure className="card__image">
            <ImgWithLoader src={image ? image : placeholder} alt={name} />
          </figure>
          <div className="card__info">
            <div className="card__name">{name}</div>
            <div className="card__values">
              <span className="card__price">
                {discount_percentage && <span>{regular_price}</span>}
                {actual_price}
              </span>
              <span className="card__installments">{installments}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
