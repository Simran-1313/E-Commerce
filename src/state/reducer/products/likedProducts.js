import { createSlice } from "@reduxjs/toolkit";


const likedProducts = createSlice({
    name:"LikedItems",
    initialState:{
        items:[],

    },
    reducers:{
        addLikedItem:(state,action)=>{
            
            const newitem = action.payload;
            
                state.items.push(newitem)
                console.log(state.items);
            
        },
        removeLikedItem:(state,action)=>{
            state.items =state.items.filter((item)=>item!==action.payload)
        }
    }
})
export const {addLikedItem,removeLikedItem}= likedProducts.actions
export default likedProducts.reducer