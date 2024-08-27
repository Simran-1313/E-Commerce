import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedin:JSON.parse(localStorage.getItem('user')) ? true : false,
    user: JSON.parse(localStorage.getItem('user'))||null,
    loading:false,
    error:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        userRegistering:(state)=>{
            state.loading= true;
            
        },
        userRegistered:(state,action)=>{
            state.loading=false;
            state.user = action.payload
        },
        userRegisterError:(state,action)=>{
            state.loading= false;
            state.error=action.payload
        },
        userLoggingIn:(state)=>{
            state.loading=true;

        },
        userLoggedIn:(state,action)=>{
            state.loading = false;
            state.isLoggedin=true;
            state.user= action.payload;

        },
        userLoggingError:(state,action)=>{
            state.loading=false;
            state.error= action.payload;
        },
        userLogOut:(state,action)=>{
            state.isLoggedin=false;
            state.loading=false;
            state.user=null;
        },
        userLogOutError:(state,action)=>{
            state.loading= false;
            state.error= action.payload;
        }
    }
})

export const {userRegistering,userRegistered,userRegisterError,userLoggingIn,userLoggedIn,userLoggingError,userLogOut,userLogOutError} = authSlice.actions;
export default authSlice.reducer