import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICatagory";

const initialState: ICategory[] = [];

const cartSlice = createSlice({
    name: 'filteredCategories',
    initialState,
    reducers: {
        addCategories(state, action: PayloadAction<ICategory[]>){
            state.concat(action.payload)
        },
        deleteCategory: (state, action: PayloadAction<{selector: string}>) => {
            return state.filter(e => e.categoryName !== action.payload.selector)
}
    },
});

export const { deleteCategory, addCategories } = cartSlice.actions;

export default cartSlice.reducer;