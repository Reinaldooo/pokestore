import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaCartPlus, FaHeart } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"
//
import * as S from "./styles"
import ImgWithLoader from "../../stateless/ImgWithLoader";
import { placeholder } from "../../services/utils";
import {
  addProductCart,
  addProductWishlist,
  removeProductWishlist
} from "../../actions";

function ProductCard({ product, wishlist }) {
  const { wishlistedIds } = useSelector(state => state.wishlist)
  const wishlisted = wishlistedIds?.includes(product.id)
  const dispatch = useDispatch()
  const {
    name,
    color,
    sprite,
    types,
    price
  } = product;

  const handleCartClick = () => {
    dispatch(addProductCart(product))
    toast.success("Oba! Produto adicionado!");
  }

  const handleWishlist = () => {
    if (wishlisted) {
      dispatch(removeProductWishlist(product))
      return
    }
    dispatch(addProductWishlist(product))
  };

  return (
    <S.CardWrapper wishlist={wishlist}>
        <S.CardAddWishlistButton onClick={handleWishlist}>
          {wishlisted ? <FaHeart color="tomato"/> : <FiHeart/>}
        </S.CardAddWishlistButton>
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
              <S.CardPrice>
                R$ {price},00
              </S.CardPrice>
            </S.CardValues>
          </div>
        </S.Card>
    </S.CardWrapper>
  );
}

export default ProductCard;
