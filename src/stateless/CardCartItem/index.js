import React from "react";
import { useDispatch } from "react-redux";
import { FiPlusCircle, FiMinusCircle  } from 'react-icons/fi';
import { BsTrash  } from 'react-icons/bs';
//
import "./styles.scss";
import { placeholder, numPriceToStr } from "../../services/utils";
import { removeProductCart, increaseProductCartQty,decreaseProductCartQty } from "../../actions";

function CardCartItem({ product, qty, totalProdPrice }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProductCart(product.sku))
  }
  const handleIncrement = () => {
    dispatch(increaseProductCartQty(product.sku))
  }
  const handleDecrement = () => {
    dispatch(decreaseProductCartQty(product.sku))
  }

  return (
    <div className="card-cart-item">
      <figure className="card-cart-item__image">
        <img src={product.image || placeholder} alt={product.name}/>
      </figure>
      <div className="card-cart-item__info">
        <div className="card-cart-item__text">
        <div className="card-cart-item__name">{product.name} </div>
        <span className="card-cart-item__tam">Tam.: {product.size}</span>
          <div>
            {numPriceToStr(product.actual_price)} - Total:
            {" " + numPriceToStr(totalProdPrice)}
          </div>
        </div>
        <div className="card-cart-item__buttons">
          <button onClick={handleIncrement}><FiPlusCircle/></button>
          <span>{qty}</span>
          <button onClick={handleDecrement}><FiMinusCircle/></button>
          <button onClick={handleRemove}><BsTrash/></button>
        </div>
      </div>
    </div>
  )
}

export default CardCartItem;
