import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./reducer/categorySlice"
import favoriteCategoriesReducer from "./reducer/favoriteSlice"

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        favorite: favoriteCategoriesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;