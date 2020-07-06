import {
  OPEN_WISHLIST_DRAWER,
  CLOSE_WISHLIST_DRAWER,
  ADD_PRODUCT_WISHLIST,
  REMOVE_PRODUCT_WISHLIST
} from "../actions"

const initialState = {
  wishlist: [],
  wishlistedIds: [],
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
        wishlist: state.wishlist.concat(payload),
        wishlistedIds: state.wishlistedIds.concat(payload.id),
        numWishlistProducts: state.numWishlistProducts + 1
      }
    case REMOVE_PRODUCT_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== payload.id),
        wishlistedIds: state.wishlistedIds.filter((id) => id !== payload.id),
        numWishlistProducts: state.numWishlistProducts - 1
      }
    default:
      return state;
  }
};

export default wishlistReducer;
