import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa"
//
import * as S from "./styles"
import ImgWithLoader from "../../stateless/ImgWithLoader";
import { placeholder, strPriceToCents } from "../../services/utils";
import { addProductCart } from "../../actions";

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const {
    id,
    name,
    color,
    sprite,
    types,
    price
  } = product;

  const handleCartClick = () => {
    // const handledProduct = {...product}
    // handledProduct.size = handledProduct.sizes[0].size;
    // handledProduct.sku = handledProduct.sizes[0].sku;
    // handledProduct.actual_price = strPriceToCents(handledProduct.actual_price)
    // dispatch(addProductCart(handledProduct))
    // toast.success("Oba! Produto adicionado!");
  }

  return (
    <S.CardWrapper>
        <S.CardAddCartButton onClick={handleCartClick}>
          <FaCartPlus/>
        </S.CardAddCartButton>
        <S.Card color={color}>
          <S.CardImage className="card__image">
            <ImgWithLoader src={sprite ? sprite : placeholder} alt={name} />
          </S.CardImage>
          <div className="card__info">
            <S.CardName color={color}>{name}</S.CardName>
            <S.CardTypes color={color}>
              {types.map(({name}) => <span key={name}>{name}</span>)}
            </S.CardTypes>
            <S.CardValues>
              <span className="card__price">
                R$ {price},00
              </span>
            </S.CardValues>
          </div>
        </S.Card>
    </S.CardWrapper>
  );
}

export default ProductCard;
