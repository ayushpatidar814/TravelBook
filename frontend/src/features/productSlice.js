import { createSlice } from "@reduxjs/toolkit";
import { products } from '../assets/assets.js'

const initialState = {
    allProducts: products,
    Wishlist: []
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            if(!state.Wishlist.includes(action.payload)) {
                state.Wishlist.push(action.payload)
            }
        },
        removeFromWishlist: (state, action) => {
            state.Wishlist = state.Wishlist.filter(id => id !== action.payload)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = productSlice.actions

export default productSlice.reducer