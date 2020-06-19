import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//
import "./styles.scss";
import { placeholder } from "../../services/utils";
import {
  closeSearchDrawer
} from "../../actions";

function CardProductHorizontal({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMoreInfo = () => {
    dispatch(closeSearchDrawer())
    history.push(`/produto/${product.id}`)
  }

  return (
    <div className="card-hz">
      <figure className="card-hz__image">
        <img src={product.image || placeholder} alt={product.name}/>
      </figure>
      <div className="card-hz__info">
        <div className="card-hz__text">
          <div className="card-hz__name">{product.name} </div>
        </div>
        <button
          className="card-hz__more-info"
          onClick={handleMoreInfo}
        >
          Mais informações
        </button>
      </div>
    </div>
  )
}

export default CardProductHorizontal;
