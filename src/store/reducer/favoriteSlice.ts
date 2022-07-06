import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICatagory";

interface IFavorite {
    favoriteCategory: ICategory[]
    isFavorite: boolean
}

const initialState: IFavorite = {
    favoriteCategory: [],
    isFavorite: false
};

const favoriteSlice = createSlice({
    name: 'filteredCategories',
    initialState,
    reducers: {
        setIsFavorite(state, {payload}: PayloadAction<boolean>){
            state.isFavorite = payload
        },
        addFavoriteCategories(state, action: PayloadAction<ICategory>){
            state.favoriteCategory.push(action.payload)
        },
        deleteFavoriteCategory: (state, {payload}: PayloadAction<string>) => {
            state.favoriteCategory = state.favoriteCategory.filter(e => e.id !== payload)
}
    },
});

export const { deleteFavoriteCategory, addFavoriteCategories, setIsFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;