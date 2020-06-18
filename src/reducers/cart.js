import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  INCREASE_PRODUCT_CART_QTY,
  DECREASE_PRODUCT_CART_QTY,
  CLOSE_CART_DRAWER,
  OPEN_CART_DRAWER,
  CLEAR_CART
} from "../actions"

const initialState = {
  cart: {},
  totalPrice: 0,
  numProducts: 0,
  shouldShow: false
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let { product } = state.cart[payload] || {}
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
            totalProdPrice: state.cart[payload.sku]
              ? state.cart[payload.sku].totalProdPrice + payload.actual_price
              : payload.actual_price,
          },
        },
        totalPrice: state.totalPrice + payload.actual_price,
        numProducts: (state.numProducts += 1),
      };
    case REMOVE_PRODUCT_CART:
      return {
        ...state,
        numProducts: state.numProducts - state.cart[payload].qty,
        totalPrice: state.totalPrice - state.cart[payload].totalProdPrice,
        cart: {
          ...state.cart,
          [payload]: null,
        },
      };
    case INCREASE_PRODUCT_CART_QTY:
      return {
        ...state,
        numProducts: state.numProducts + 1,
        totalPrice: state.totalPrice + product.actual_price,
        cart: {
          ...state.cart,
          [payload]: {
            ...state.cart[payload],
            qty: state.cart[payload].qty + 1,
            totalProdPrice:
              state.cart[payload].totalProdPrice + product.actual_price,
          },
        },
      };
    case DECREASE_PRODUCT_CART_QTY:
      if (state.cart[payload].qty === 1) {
        return {
          ...state,
          numProducts: state.numProducts - 1,
          totalPrice: state.totalPrice - state.cart[payload].totalProdPrice,
          cart: {
            ...state.cart,
            [payload]: null,
          },
        };
      }
      return {
        ...state,
        numProducts: state.numProducts - 1,
        totalPrice: state.totalPrice - product.actual_price,
        cart: {
          ...state.cart,
          [payload]: {
            ...state.cart[payload],
            qty: state.cart[payload].qty - 1,
            totalProdPrice:
              state.cart[payload].totalProdPrice - product.actual_price,
          },
        },
      };
    case CLEAR_CART:
      return {
        cart: {},
        totalPrice: 0,
        numProducts: 0,
        shouldShow: false,
      };
    case CLOSE_CART_DRAWER:
      return {
        ...state,
        shouldShow: false,
      };
    case OPEN_CART_DRAWER:
      return {
        ...state,
        shouldShow: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
