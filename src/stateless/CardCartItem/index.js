import React from "react";
import { useDispatch } from "react-redux";
import { FiPlusCircle, FiMinusCircle  } from 'react-icons/fi';
import { BsTrash  } from 'react-icons/bs';
//
import "./styles.scss";
import { placeholder, numPriceToStr } from "../../services/utils";

function CardCartItem({ product, qty, totalProdPrice }) {
  const dispatch = useDispatch();

  return (
    <div className="card-hz">
      <figure className="card-hz__image">
        <img src={product.image || placeholder} alt={product.name}/>
      </figure>
      <div className="card-hz__info">
        <div className="card-hz__text">
        <div className="card-hz__name">{product.name} </div>
        <span className="card-hz__tam">Tam.: {product.size}</span>
          <div>
            {numPriceToStr(product.actual_price)} - Total:
            {" " + numPriceToStr(totalProdPrice)}
          </div>
        </div>
        <div className="card-hz__buttons">
          <button><FiPlusCircle/></button>
          <span>{qty}</span>
          <button><FiMinusCircle/></button>
          <button><BsTrash/></button>
        </div>
      </div>
    </div>
  )
}

export default CardCartItem;
