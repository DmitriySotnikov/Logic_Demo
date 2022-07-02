import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./reducer/categorySlice"
import filteredCategoriesReducer from "./reducer/cartSlice"

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        filter: filteredCategoriesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;