import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsAll = createAsyncThunk('productsAll/fetchProductsAll',
    async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        return response.data;
    }
);
const productsAllSlice = createSlice({
    name: 'productsAll',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsAll.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProductsAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productsAllSlice.reducer;