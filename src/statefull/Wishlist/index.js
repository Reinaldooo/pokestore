import React from "react";
import { useSelector } from "react-redux";
//
import Drawer from "../../stateless/Drawer";
import CardProduct from "../../statefull/CardProduct";
import { closeWishlistDrawer } from "../../actions"

function Wishlist() {
  const { shouldShowWishlist, wishlist } = useSelector(
    (state) => state.wishlist
  );

  return shouldShowWishlist ? (
    <Drawer
      title="Lista de desejos"
      closeFunction={closeWishlistDrawer}
    >
      {
        wishlist.length ?
        wishlist.map((prod) => (
          <CardProduct
            wishlist
            product={prod}
            key={prod.id}
            closeFunction={closeWishlistDrawer}
          />
        ))
        :
        <p className="drawer__empty">Adicione as cartas e elas aparecerão aqui! :)</p>
      }
    </Drawer>
  ) : null;
}

export default Wishlist;