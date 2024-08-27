import { createSlice } from "@reduxjs/toolkit";

const productsAllSlice = createSlice({
    name:"productsAll",
    initialState:{
        items:[],
        loading:false,
        error:null
    },
    reducers:{
        productsAllLoading:(state)=>{
            state.loading= true;
            state.error= null;
        },
        productsAllSuccess:(state,action)=>{
            state.loading= false;
            state.items = action.payload
        },
        productsAllError:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        }

    }

})
export const {productsAllLoading,productsAllSuccess,productsAllError} = productsAllSlice.actions;
export default productsAllSlice.reducer