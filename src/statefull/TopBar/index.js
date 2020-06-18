import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
//
import "./styles.scss"
import Logo from "../../assets/logo.svg"
import { openCartDrawer, openSearchDrawer } from '../../actions';

function TopBar() {
  const dispatch = useDispatch()
  const { numProducts } = useSelector(state => state.cart)
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar">
          <Link to="/">
            <img src={Logo} alt="logo" className="topbar__logo"/>
          </Link>
          <div className="topbar__buttons">
            <button
              className="topbar__button"
              onClick={() => dispatch(openSearchDrawer())}
            >
              <FiSearch size="25px"/>
            </button>
            <button className="topbar__button">
              <span className="topbar__button__counter">
                0
              </span>
              <FiHeart size="25px"/>
            </button>
            <button
              className="topbar__button"
              onClick={() => dispatch(openCartDrawer())}
            >
              <span className="topbar__button__counter">
                { numProducts || 0 }
              </span>
              <FiShoppingCart size="25px"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
