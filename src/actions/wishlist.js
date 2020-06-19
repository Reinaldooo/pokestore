export const OPEN_WISHLIST_DRAWER = "OPEN_WISHLIST_DRAWER";
export const CLOSE_WISHLIST_DRAWER = "CLOSE_WISHLIST_DRAWER";
export const ADD_PRODUCT_WISHLIST = "ADD_PRODUCT_WISHLIST";

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

export const addProductWihlist = (id) => {
  return {
    type: ADD_PRODUCT_WISHLIST,
    payload: id
  }
}

