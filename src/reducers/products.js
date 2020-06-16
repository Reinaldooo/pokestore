import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR
} from "../actions"

const initialState = {
  products: [],
  loading: true,
  fetchProductsError: false,
  errorMessage: null
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
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        fetchProductsError: true,
        errorMessage: payload
      }
    default:
      return state;
  }
};

export default productsReducer;
