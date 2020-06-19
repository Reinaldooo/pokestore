import {
  OPEN_WISHLIST_DRAWER,
  CLOSE_WISHLIST_DRAWER,
  ADD_PRODUCT_WISHLIST,
} from "../actions"

const initialState = {
  wishlist: [],
  numWishlistProducts: 0,
  shouldShowWishlist: false
};

const wishlistReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case OPEN_WISHLIST_DRAWER:
      return {
        ...state,
        shouldShowWishlist: true
      }
    case CLOSE_WISHLIST_DRAWER:
      return {
        ...state,
        shouldShowWishlist: false
      }
    case ADD_PRODUCT_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.push(payload)
      }
    default:
      return state;
  }
};

export default wishlistReducer;
