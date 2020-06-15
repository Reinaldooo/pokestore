import React from 'react';
import { useSelector } from 'react-redux';
//
import "./styles.scss"
import Drawer from "../../stateless/Drawer"
import CardCartItem from "../../stateless/CardCartItem"
import { numPriceToStr } from "../../services/utils"

function Cart() {
  const { shouldShow, cart, totalPrice } = useSelector(state => state.cart)
  const cartKeys = Object.keys(cart)
  return shouldShow ? (
    <Drawer title={`Total: ${numPriceToStr(totalPrice)}`}>      
      {
        cartKeys[0] &&
          cartKeys.map((key) => {
            if (cart[key]) {
              return (
                <CardCartItem
                  key={cart[key].product.sku}
                  product={cart[key].product}
                  qty={cart[key].qty}
                  totalProdPrice={cart[key].totalProdPrice}
                />
              );
            }
          })
      }
      <button className="drawer__checkout">Finalizar compra</button>
    </Drawer>
  ) : null;
}

export default Cart;
