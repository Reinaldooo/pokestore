import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLOSE_CART_DRAWER,
  OPEN_CART_DRAWER
} from "../actions"

const initialState = {
  cart: {},
  totalPrice: 0,
  numProducts: 0,
  shouldShow: false
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [payload.sku]: {
            qty: state.cart[payload.sku] ? state.cart[payload.sku].qty + 1 : 1,
            product: payload,
            totalProdPrice: state.cart[payload.sku] ?
            (state.cart[payload.sku].totalProdPrice + payload.actual_price) :
            payload.actual_price
          }
        },
        totalPrice: (state.totalPrice + payload.actual_price),
        numProducts: state.numProducts+=1
      }
    case REMOVE_PRODUCT_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [payload]: null
        }
      }
    case CLOSE_CART_DRAWER:
      return {
        ...state,
        shouldShow: false
      }
    case OPEN_CART_DRAWER:
      return {
        ...state,
        shouldShow: true
      }
    default:
      return state;
  }
};

export default productsReducer;
