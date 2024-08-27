import { call, put } from "redux-saga/effects";
import { productsAllLoading, productsAllSuccess } from "../../reducer/products/productsAllSlice";
import axios from "axios";
import { productsDetailsError } from "../../reducer/products/productDetailSlice";

const productsAllAPI = ()=>{
    return axios.get("https://fakestoreapi.com/products/")
}

export function* productsAllSaga(){
    try {
        
        yield put(productsAllLoading());
        const response= yield call(productsAllAPI)
        yield put (productsAllSuccess(response.data))
    } catch (error) {
        yield put (productsDetailsError(error))
    }
}