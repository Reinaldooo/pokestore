import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//
import "./styles.scss";
import Drawer from "../../stateless/Drawer";
import CardCartItem from "../../stateless/CardCartItem";
import { numPriceToStr } from "../../services/utils";
import { clearCart } from "../../actions";

function Cart() {
  const dispatch = useDispatch();
  const { shouldShow, cart, totalPrice } = useSelector((state) => state.cart);
  const cartKeys = Object.keys(cart);

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success("Compra finalizada! :)", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return shouldShow ? (
    <Drawer title={totalPrice ? `Total: ${numPriceToStr(totalPrice)}` : ""}>
      {totalPrice > 0 && (
        <button className="drawer__checkout" onClick={handleCheckout}>
          Finalizar compra
        </button>
      )}
      {cartKeys[0] &&
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
          return false;
        })}
      {!totalPrice && (
        <p className="drawer__empty">Ops, nenhum item no carrinho! :/</p>
      )}
    </Drawer>
  ) : null;
}

export default Cart;
