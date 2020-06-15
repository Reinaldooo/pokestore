import React, { useRef } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
//
import './styles.scss';
import { closeCartDrawer } from "../../actions"


export default function Drawer({ children, title }) {
  const dispatch = useDispatch()
  const container = useRef(null);
  const shouldShow = useSelector((state) => state.cart);

  return shouldShow ? (
      <div className="drawer">
        <div ref={container} className="drawer__container drawer__container--open">
          <div className="drawer__header">
            <button onClick={() => {
              dispatch(closeCartDrawer())
            }}>
            <FiArrowLeftCircle size="1.5rem"/>
            </button>
            <div className="drawer__header__title__container">
              <h4 className="drawer__header__title">{title}</h4>
            </div>
          </div>
          <div className="drawer__body">{children}</div>
        </div>
      </div>
    ) : null
}