import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/slice";

export const store = configureStore({
    reducer:{
        products : productsSlice.reducer
    },
})