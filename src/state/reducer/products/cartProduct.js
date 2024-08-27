import { createSlice } from "@reduxjs/toolkit";

const cartProducts = createSlice({
  name: "cartProduct",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (existingItem === -1) {
        state.items.push(action.payload);
      }
      else{
        state.items[existingItem].quantity++
      }
    },
    updateItem:(state,action)=>{
        const itemIndex = state.items.findIndex((item)=> item.productId === action.payload.id)
        if(itemIndex!== -1){
            state.items[itemIndex].quantity = action.payload.quantity
        }
    },
    removeItem: (state, action) => {
      
      state.items = state.items.filter((item) => item.productId !== action.payload.id);
    },
  },
});
export const { addItem, removeItem,updateItem } = cartProducts.actions;
export default cartProducts.reducer;
