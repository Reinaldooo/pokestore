export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART";
export const INCREASE_PRODUCT_CART_QTY = "INCREASE_PRODUCT_CART_QTY";
export const DECREASE_PRODUCT_CART_QTY = "DECREASE_PRODUCT_CART_QTY";
export const CLEAR_CART = "CLEAR_CART";
export const CLOSE_CART_DRAWER = "CLOSE_CART_DRAWER";
export const OPEN_CART_DRAWER = "OPEN_CART_DRAWER";

export const addProductCart = (prod) => {
  return {
    type: ADD_PRODUCT_CART,
    payload: prod
  };
};

export const removeProductCart = (sku) => {
  return {
    type: REMOVE_PRODUCT_CART,
    payload: sku
  };
};

export const increaseProductCartQty = (sku) => {
  return {
    type: INCREASE_PRODUCT_CART_QTY,
    payload: sku
  };
};

export const decreaseProductCartQty = (sku) => {
  return {
    type: DECREASE_PRODUCT_CART_QTY,
    payload: sku
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
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