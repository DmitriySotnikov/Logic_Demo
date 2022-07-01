import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICatagory";
import {fetchAllCategories} from "../../service";

interface CategoryState {
    categories: ICategory[]
    isLoading: boolean
    error: string
    selector: string
    isActiveId: string
}

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: "",
    selector: "",
    isActiveId: ""
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelector(state, action: PayloadAction<{selector: string}>) {
            state.selector = action.payload.selector
        },
        setActiveId(state, action: PayloadAction<{id: string}>) {
            state.isActiveId = action.payload.id
        },
        deleteCategory(state, action: PayloadAction<{id: string}>) {
            const index = state.categories.findIndex(e => e.id === action.payload.id)
            if (index !== -1) { state.categories.splice(index, 1)}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            state.isLoading = false
            state.categories = action.payload
        })
        builder.addCase(fetchAllCategories.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export const {
    setActiveId,
    setSelector,
    deleteCategory
} = categorySlice.actions;

export default categorySlice.reducer;