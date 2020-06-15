import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART
} from "../actions"

const initialState = {
  cart: {},
  totalPrice: 0,
  numProducts: 0
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
          [payload.id]: {
            qty: state.cart[payload.id] ? state.cart[payload.id].qty + 1 : 1,
            product: payload,
            totalProdPrice: state.cart[payload.id] ?
            state.cart[payload.id].totalProdPrice + payload.actual_price :
            payload.actual_price
          }
        },
        totalPrice: state.totalPrice + payload.actual_price,
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
    default:
      return state;
  }
};

export default productsReducer;
