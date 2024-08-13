import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import productDetailsReducer from './productDetailsSlice';
import productsAllReducer from './productsAllSlice';
import cartProductReducer from './cartProduct';
const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    productsAll: productsAllReducer,
    cartProducts:cartProductReducer
  },
});

export default store;