export const PRODUCTS_FETCH = "PRODUCTS_FETCH";
export const PRODUCTS_FETCH_LOADING = "PRODUCTS_FETCH_LOADING";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_ERROR = "PRODUCTS_FETCH_ERROR";
export const CLOSE_SEARCH_DRAWER = "CLOSE_SEARCH_DRAWER";
export const OPEN_SEARCH_DRAWER = "OPEN_SEARCH_DRAWER";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const productsFetch = () => {
  return {
    type: PRODUCTS_FETCH
  };
};

export const setProductsFetchLoading = () => {
  return {
    type: PRODUCTS_FETCH_LOADING
  };
};

export const setProductsFetchSuccess = (data) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload: data
  };
};

export const setProductsFetchError = (data) => {
  return {
    type: PRODUCTS_FETCH_ERROR,
    payload: data
  };
};

export const openSearchDrawer = () => {
  return {
    type: OPEN_SEARCH_DRAWER,
  };
};

export const closeSearchDrawer = () => {
  return {
    type: CLOSE_SEARCH_DRAWER,
  };
};

export const searchProducts = (query) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: query
  };
};