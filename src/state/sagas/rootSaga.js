import { takeLatest } from "redux-saga/effects";
import { loginUser } from "../actions/loginUser";
import { logoutUser } from "../actions/logoutUser";
import { loginUserSaga } from "./user/login";
import { logoutUserSaga } from "./user/logout";
import { registerUser } from "../actions/registerUser";
import { signinUserSaga } from "./user/sign";
import { productsDetails } from "../actions/productsDetails";
import { productDetailSaga } from "./products/productsDetails";
import { productsAll } from "../actions/productsAll";
import { productsAllSaga } from "./products/productsAllDetails";
import { productsMonths } from "../actions/products";
import productsSaga from "./products/products";

export function* watchUserSaga(){
    yield takeLatest(loginUser.type,loginUserSaga);
    yield takeLatest(logoutUser.type,logoutUserSaga);
    yield takeLatest(registerUser.type,signinUserSaga);
    yield takeLatest(productsDetails.type,productDetailSaga);
    yield takeLatest(productsAll.type,productsAllSaga);
    yield takeLatest(productsMonths.type,productsSaga);
}