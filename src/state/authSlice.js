import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";
import toast from "react-hot-toast";
import { Router } from "react-router-dom";

const initialState = {
    isLoggedin:JSON.parse(localStorage.getItem('user')) ? true : false,
    user: JSON.parse(localStorage.getItem('user'))||null,
    loading:false,
    error:null

}
export const registerUser = createAsyncThunk('auth/registerUser', async(userData)=>{
    console.log(userData)
    const response = await authService.register(userData.username, userData.email,userData.password);
    toast.success("User Created Successfully Log in now")
    
    return response;
})

export const loginUser = createAsyncThunk('auth/loginUser', async(credentials)=>{
    const response = await authService.login(credentials.email, credentials.password)
    console.log(response)
    return response;
})

export const logoutUser = createAsyncThunk('auth/logoutUser',async()=>{
   authService.logout();
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.loading = false
        })
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoggedin=true;
            state.loading = false;
            state.user = action.payload;
            
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
        .addCase(logoutUser.fulfilled,(state,action)=>{
            state.isLoggedin= false;
            state.loading=false
        })
        .addCase(logoutUser.pending,(state)=>{
            state.loading= true
            
        }
        )
        .addCase(logoutUser.rejected,(state,action)=>{
            state.error=action.error.message
        })

    }
})
export default authSlice.reducer