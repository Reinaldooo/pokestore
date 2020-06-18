export const CLOSE_SEARCH_DRAWER = "CLOSE_SEARCH_DRAWER";
export const OPEN_SEARCH_DRAWER = "OPEN_SEARCH_DRAWER";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

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