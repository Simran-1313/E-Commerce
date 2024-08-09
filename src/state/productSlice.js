import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (limit)=>{
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState : {
        items: [],
        loading: false,
        error: null,
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})
export default productsSlice.reducer;