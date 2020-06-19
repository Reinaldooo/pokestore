export const OPEN_WISHLIST_DRAWER = "OPEN_WISHLIST_DRAWER";
export const CLOSE_WISHLIST_DRAWER = "CLOSE_WISHLIST_DRAWER";
export const ADD_PRODUCT_WISHLIST = "ADD_PRODUCT_WISHLIST";
export const REMOVE_PRODUCT_WISHLIST = "REMOVE_PRODUCT_WISHLIST";

export const openWishlistDrawer = () => {
  return {
    type: OPEN_WISHLIST_DRAWER
  }
}

export const closeWishlistDrawer = () => {
  return {
    type: CLOSE_WISHLIST_DRAWER
  }
}

export const addProductWishlist = (prod) => {
  return {
    type: ADD_PRODUCT_WISHLIST,
    payload: prod
  }
}

export const removeProductWishlist = (prod) => {
  return {
    type: REMOVE_PRODUCT_WISHLIST,
    payload: prod
  }
}

