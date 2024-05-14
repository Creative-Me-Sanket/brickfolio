import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './initialState'

export const productsSlice = createSlice({
    name: "productSlice",
    initialState: initialState,

    reducers: {
        setProducts: (state,{payload}) => {
            state.productsData = payload ;  
        },
        setCategory: (state,{payload}) => {
            state.categories = payload;
        },
        setProductByCategory : (state,{payload}) => {
            state.productByCategory = payload;
        }
    }
});

export const {
    setProducts,
    setCategory,
    setProductByCategory,
} = productsSlice.actions