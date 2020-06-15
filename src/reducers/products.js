import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCCESS
} from "../actions"

const initialState = {
  products: [],
  loading: true,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case PRODUCTS_FETCH_LOADING:
      return {
        ...state,
        loading: true
      }
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload
      }
    default:
      return state;
  }
};

export default productsReducer;
