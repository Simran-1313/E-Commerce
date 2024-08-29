import { createSlice } from "@reduxjs/toolkit";


const likedProducts = createSlice({
    name:"LikedItems",
    initialState:{
        items:[],

    },
    reducers:{
        addLikedItem:(state,action)=>{
            
            
            const newitem = action.payload;
      if (!state.items.includes(newitem)) {
        state.items.push(newitem);
      }
                
            
        },
        removeLikedItem:(state,action)=>{
            state.items =state.items.filter((item)=>item!==action.payload)
        }
    }
})
export const {addLikedItem,removeLikedItem}= likedProducts.actions
export default likedProducts.reducer