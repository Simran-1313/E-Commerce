import { call, put } from "redux-saga/effects"
import { userLoggedIn, userLoggingError, userLoggingIn } from "../../reducer/user/auth"
import authService from "../../../services/authService";

const loginAPI = (credentials)=>{
    return  authService.login(credentials.email,credentials.password)
}

export function* loginUserSaga(action){
    try{
        yield put (userLoggingIn());
        const response= yield call (loginAPI,action.payload);
        
        yield put(userLoggedIn(response))

    }
    catch(error){
        yield put(userLoggingError(error))
    }
}