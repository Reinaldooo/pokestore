import { combineReducers } from 'redux'

import productsReducer from './products';
import cartReducer from './cart';
import wishlistReducer from './wishlist';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
})

export default rootReducer;
