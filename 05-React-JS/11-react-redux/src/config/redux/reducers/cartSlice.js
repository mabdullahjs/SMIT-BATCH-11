import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem: (state, action) => {
            state.cartItems.push(action.payload.item)
        },
        removeCartItem: (state, action) =>{
            state.cartItems.splice(action.payload.index , 1)
        }
    }
}) 


export const { addCartItem , removeCartItem } = cartSlice.actions
export default cartSlice.reducer