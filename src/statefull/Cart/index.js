import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//
import Drawer from "../../stateless/Drawer";
import CardProductCart from "../../stateless/CardProductCart";
import { clearCart, closeCartDrawer } from "../../actions";

function Cart() {
  const dispatch = useDispatch();
  const { shouldShowCart, cart, totalPrice } = useSelector((state) => state.cart);
  const cartKeys = Object.keys(cart);

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success("Compra finalizada! :)");
  };

  return shouldShowCart ? (
    <Drawer
      title={totalPrice > 0 ? `Total: ${totalPrice},00` : ""}
      closeFunction={closeCartDrawer}
    >
      {totalPrice > 0 && (
        <button className="drawer__checkout" onClick={handleCheckout}>
          Finalizar compra
        </button>
      )}
      {cartKeys[0] &&
        cartKeys.map((key) => {
          if (cart[key]) {
            return (
              <CardProductCart
                key={cart[key].product.sku}
                product={cart[key].product}
                qty={cart[key].qty}
                totalProdPrice={cart[key].totalProdPrice}
                isCart
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
