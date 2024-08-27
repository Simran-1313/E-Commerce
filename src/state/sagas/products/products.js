import { call, put } from "redux-saga/effects";
import { productsError, productsLoading, productsSuccess } from "../../reducer/products/productsSlice";
import axios from "axios";

const productsAPI=(limit)=>{
    return axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
}

export default function* productsSaga(action){
    try {
        yield put(productsLoading())
        const response = yield call(productsAPI,action.payload)
        yield put (productsSuccess(response.data))
    } catch (error) {
        yield put(productsError(error));
    }

}