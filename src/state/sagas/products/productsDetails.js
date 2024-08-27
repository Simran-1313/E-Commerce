import { call, put } from "redux-saga/effects"
import axios from "axios"
import { productDetailsLoading, productsDetailsError, productsDetailsSuccess } from "../../reducer/products/productDetailSlice"

const productsDetailsAPI = (productId)=>{
  
return axios.get(`https://fakestoreapi.com/products/${productId}`)
}

export function* productDetailSaga(action){
    try {
        yield put(productDetailsLoading());
        const response = yield call(productsDetailsAPI,action.payload);
        
        yield put (productsDetailsSuccess(response.data))
    } catch (error) {
        yield put (productsDetailsError(error))
    }
}