import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  OPEN_SEARCH_DRAWER,
  CLOSE_SEARCH_DRAWER,
  SEARCHING_PRODUCTS
} from "../actions"

const initialState = {
  products: [],
  loading: true,
  fetchProductsError: false,
  errorMessage: null,
  searchResult: null,
  searching: false
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
        searching: false,
        products: payload
      }
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        fetchProductsError: true,
        errorMessage: payload
      }
    case OPEN_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: true
      }
    case CLOSE_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: false,
        searchResult: null
      }
    case SEARCHING_PRODUCTS:
      return {
        ...state,
        searching: true
      }
    default:
      return state;
  }
};

export default productsReducer;
