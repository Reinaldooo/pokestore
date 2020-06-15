export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART";
export const CLOSE_CART_DRAWER = "CLOSE_CART_DRAWER";
export const OPEN_CART_DRAWER = "OPEN_CART_DRAWER";

export const AddProductCart = (prod) => {
  return {
    type: ADD_PRODUCT_CART,
    payload: prod
  };
};

export const RemoveProductCart = (prod) => {
  return {
    type: REMOVE_PRODUCT_CART,
    payload: prod
  };
};

export const closeCartDrawer = () => {
  return {
    type: CLOSE_CART_DRAWER
  };
};

export const openCartDrawer = () => {
  return {
    type: OPEN_CART_DRAWER
  };
};