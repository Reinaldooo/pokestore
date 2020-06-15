export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART";

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