export const PRODUCTS_FETCH_LOADING = "PRODUCTS_FETCH_LOADING";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_ERROR = "PRODUCTS_FETCH_ERROR";

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