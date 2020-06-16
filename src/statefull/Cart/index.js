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
  // As "deleted" items are just set to null, this var will
  // track if there is real items on the cart, or just deleted ones
  let validItems = 0
  return shouldShow ? (
    <Drawer title={totalPrice ? `Total: ${numPriceToStr(totalPrice)}` : ""}> 
      {
        cartKeys[0] &&
          cartKeys.map((key, idx) => {
            if (cart[key]) {
              validItems++
              return (
                <CardCartItem
                  key={cart[key].product.sku}
                  product={cart[key].product}
                  qty={cart[key].qty}
                  totalProdPrice={cart[key].totalProdPrice}
                />
              );
            }
            if(idx === cartKeys.length - 1 && validItems) {
              return <button className="drawer__checkout">Finalizar compra</button>
            }
            return false
          })
      }
      {
        !validItems && <p className="drawer__empty">Ops, nenhum item no carrinho! :/</p>
      }
    </Drawer>
  ) : null;
}

export default Cart;
