import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductDetails = createAsyncThunk('productDetail/fetchProductDetails',
    async (productId) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        return response.data;
    }
);
const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        item: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productDetailSlice.reducer;