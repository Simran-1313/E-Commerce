import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        item: null,
        loading: false,
        error: null,
    },
    reducers: {
        productDetailsLoading:(state)=>{
            state.loading= true;
            state.error= null;
        },
        productsDetailsSuccess:(state,action)=>{
            state.loading=false;
            state.item = action.payload;
           
        },
        productsDetailsError:(state,action)=>{
            state.loading= false;
            state.error= action.payload
        }
        
    }
    
    
});
export const {productDetailsLoading,productsDetailsSuccess,productsDetailsError}= productDetailSlice.actions;

export default productDetailSlice.reducer;