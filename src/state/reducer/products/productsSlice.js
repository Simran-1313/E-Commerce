import { createSlice } from "@reduxjs/toolkit";

const productSlice= createSlice({
    name:"products",
    initialState:{
        items:[],
        loading:false,
        error:null,
    },
    reducers:{
        productsLoading:(state)=>{
            state.loading= true;
            state.error=null;
        },
        productsSuccess:(state,action)=>{
            state.loading= false;
            state.items= action.payload;
        },
        productsError:(state,action)=>{
            state.loading= false;
            state.error= action.payload;
        }
    }
})

export const {productsError,productsSuccess,productsLoading} = productSlice.actions;
export default productSlice.reducer