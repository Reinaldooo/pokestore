import React from 'react';
import { useSelector } from 'react-redux';
//
import "./styles.scss"
import Drawer from "../../stateless/Drawer"

function Cart() {
  const { shouldShow } = useSelector(state => state.cart)
  return shouldShow ? (
    <Drawer
      title="Cesta"
    />
  ) : null;
}

export default Cart;
