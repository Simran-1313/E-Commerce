import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"
import productsReducer from './reducer/products/productsSlice';
import productDetailsReducer from './reducer/products/productDetailSlice';
import productsAllReducer from './reducer/products/productsAllSlice';
import cartProductReducer from './reducer/products/cartProduct';
import { watchUserSaga } from './sagas/rootSaga';
import authReducer from './reducer/user/auth';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const sagaMiddleware = createSagaMiddleware();
const persistConfig= {
  key : 'root',
  storage,
  whitelist:['cartProducts']

}
const rootReducer = combineReducers({
  products: productsReducer,
    productDetails: productDetailsReducer,
    productsAll: productsAllReducer,
    cartProducts:cartProductReducer,
    auth:authReducer
});
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchUserSaga)
const persistor = persistStore(store)
export {store,persistor};