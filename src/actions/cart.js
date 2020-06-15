export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART";

export const setAddProductCart = (prod) => {
  return {
    type: ADD_PRODUCT_CART,
    payload: prod
  };
};

export const setRemoveProductCart = (prod) => {
  return {
    type: REMOVE_PRODUCT_CART,
    payload: prod
  };
};