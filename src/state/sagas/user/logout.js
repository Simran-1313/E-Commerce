import { call, put } from "redux-saga/effects";
import authService from "../../../services/authService";
import { userLogOut, userLogOutError } from "../../reducer/user/auth";

const logoutAPI = ()=>{
    return authService.logout()
}

export function* logoutUserSaga(){
    try{
        yield call(logoutAPI);
        yield put(userLogOut());
    }
    catch(e){
     yield put(userLogOutError(e))
    }
}   