import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICatagory";
import {fetchAllCategories} from "../../service";

interface CategoryState {
    filteredCategories: ICategory[]
    categories: ICategory[]
    isLoading: boolean
    error: string
    selector: string
    isActiveId: string
}

const initialState: CategoryState = {
    filteredCategories: [],
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
        setSelector(state, {payload}: PayloadAction<string>) {
            state.selector = payload
        },
        setActiveId(state, {payload}: PayloadAction<string>) {
            state.isActiveId = payload
        },
        deleteCategory(state, {payload}: PayloadAction<string>) {
            const index = state.categories.findIndex(e => e.id === payload)
            if (index !== -1) { state.categories.splice(index, 1)}
        },
        selectionCategory(state, {payload}: PayloadAction<string>) {
            if (payload) {
                state.filteredCategories = []
                state.categories.forEach((category, i) => {
                    if (category.categoryName === payload){
                        state.filteredCategories.push({...category})
                    }
                })
            } else state.filteredCategories = state.categories
        },
        sortCategories(state, {payload}: PayloadAction<string>) {
            payload === "date"
                ? state.categories = Object.values(state.categories).sort(
                (x: ICategory, y: ICategory ) => x[payload].localeCompare(y[payload]))
                : state.categories = Object.values(state.categories).sort((a: ICategory, b: ICategory ) => (
                    a.date.split('.').reverse().join('-') > b.date.split('.').reverse().join('-')
                ) ? 1 : -1 )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            state.isLoading = false
            state.filteredCategories = action.payload
            state.categories = action.payload
        })
        builder.addCase(fetchAllCategories.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export const {
    selectionCategory,
    setActiveId,
    setSelector,
    deleteCategory,
    sortCategories,
} = categorySlice.actions;

export default categorySlice.reducer;