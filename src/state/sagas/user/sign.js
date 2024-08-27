import { call, put } from "redux-saga/effects"
import {userRegistered, userRegisterError, userRegistering} from "../../reducer/user/auth"
import authService from "../../../services/authService"
import toast from "react-hot-toast"
const registerUser = (userData)=>{
    return authService.register(userData.username,userData.email,userData.password)
}

export function* signinUserSaga(action){
    try{
        yield put(userRegistering())
       const response=yield call(registerUser,action.payload);
       toast.success("UserCreated Succesfully Log in now")
        yield put(userRegistered(response))
    }
    catch(error){
        yield put(userRegisterError(error));
    }
}