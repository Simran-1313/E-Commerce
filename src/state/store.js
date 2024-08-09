import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import productDetailsReducer from './productDetailsSlice';
import productsAllReducer from './productsAllSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    productsAll: productsAllReducer
  },
});

export default store;