import React from "react";
import { useDispatch } from "react-redux";
import { FiPlusCircle, FiMinusCircle  } from 'react-icons/fi';
import { BsTrash  } from 'react-icons/bs';
//
import "./styles.scss";
import { placeholder } from "../../services/utils";
import {
  removeProductCart,
  increaseProductCartQty,
  decreaseProductCartQty,
} from "../../actions";

function CardProductCart({ product, qty, totalProdPrice }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProductCart(product.id))
  }
  const handleIncrement = () => {
    dispatch(increaseProductCartQty(product.id))
  }
  const handleDecrement = () => {
    dispatch(decreaseProductCartQty(product.id))
  }

  return (
    <div className="card-cart-item">
      <figure className="card-cart-item__image">
        <img src={product.sprite || placeholder} alt={product.name}/>
      </figure>
      <div className="card-cart-item__info">
        <div className="card-cart-item__text">
        <div className="card-cart-item__name">{product.name} </div>
        <div className="card-cart-item__price">
          Total: {totalProdPrice},00
        </div>
        </div>
        <div className="card-cart-item__buttons">
          <button onClick={handleDecrement}><FiMinusCircle/></button>
          <span>{qty}</span>
          <button onClick={handleIncrement}><FiPlusCircle/></button>
          <button onClick={handleRemove}><BsTrash/></button>
        </div>
      </div>
    </div>
  )
}

export default CardProductCart;
