import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICatagory";

const initialState: ICategory[] = [];

const favoriteSlice = createSlice({
    name: 'filteredCategories',
    initialState,
    reducers: {
        addFavoriteCategories(state, action: PayloadAction<ICategory>){
            state.push(action.payload)
        },
        deleteFavoriteCategory: (state, {payload}: PayloadAction<string>) => {
            return state.filter(e => e.id !== payload)
}
    },
});

export const { deleteFavoriteCategory, addFavoriteCategories } = favoriteSlice.actions;

export default favoriteSlice.reducer;