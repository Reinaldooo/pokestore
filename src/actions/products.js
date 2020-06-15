export const PRODUCTS_FETCH_LOADING = "PRODUCTS_FETCH_LOADING";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";

export const setProductsFetchLoading = () => {
  return {
    type: PRODUCTS_FETCH_LOADING
  };
};

export const setPRoductsFetchSuccess = (data) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload: data
  };
};