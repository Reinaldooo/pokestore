import {
  PRODUCTS_FETCH_LOADING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  OPEN_SEARCH_DRAWER,
  CLOSE_SEARCH_DRAWER,
  SEARCH_PRODUCTS
} from "../actions"

const initialState = {
  products: [],
  loading: true,
  fetchProductsError: false,
  errorMessage: null,
  searchResult: null,
  shouldShowSearch: false
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
    case OPEN_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: true
      }
    case CLOSE_SEARCH_DRAWER:
      return {
        ...state,
        shouldShowSearch: false
      }
    case SEARCH_PRODUCTS:
      const result = state.products.filter((prod) => {
        return prod.name.includes(payload.toUpperCase()) 
        ||
        prod.normalizedName.includes(payload.toUpperCase())
      })
      console.log(result)
      return {
        ...state,
        searchResult: result,
        shouldShowSearch: false
      }
    default:
      return state;
  }
};

export default productsReducer;
