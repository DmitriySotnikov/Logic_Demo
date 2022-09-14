import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICatagory";
import fetchAllCategories from "../../service";

interface CategoryState {
    filteredCategories: ICategory[];
    categories: ICategory[];
    isLoading: boolean;
    error: any;
    selector: string;
    isActiveId: string;
}

const initialState: CategoryState = {
    filteredCategories: [],
    categories: [],
    isLoading: false,
    error: null,
    selector: "",
    isActiveId: "",
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setSelector(state, { payload }: PayloadAction<string>) {
            return { ...state, selector: payload };
            // state.selector = payload;
        },
        setActiveId(state, { payload }: PayloadAction<string>) {
            return { ...state, isActiveId: payload };
            // state.isActiveId = payload;
        },
        deleteCategory(state, { payload }: PayloadAction<string>) {
            const index = state.categories.findIndex((e) => e.id === payload);
            if (index !== -1) {
                state.categories.splice(index, 1);
            }
        },
        selectionCategory(state, { payload }: PayloadAction<string>) {
            if (payload) {
                // state.filteredCategories = [];
                const newState = { ...state, filteredCategories: [] };
                state.categories.forEach((category, i) => {
                    if (category.categoryName === payload) {
                        state.filteredCategories.push({ ...category });
                    }
                });
            }
            return { ...state, filteredCategories: state.categories };
            // else state.filteredCategories = state.categories;
        },
        sortCategories(state, { payload }: PayloadAction<string>) {
            if (payload === "date")
                return {
                    ...state,
                    categories: Object.values(state.categories).sort(
                        (a: ICategory, b: ICategory) =>
                            a.date.split(".").reverse().join("-") >
                            b.date.split(".").reverse().join("-")
                                ? 1
                                : -1
                    ),
                };
            if (payload === "title" || payload === "categoryName")
                return {
                    ...state,
                    categories: Object.values<ICategory>(state.categories).sort(
                        (a, b) => a[payload].localeCompare(b[payload])
                    ),
                };
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        // state.isLoading = true

        builder.addCase(
            fetchAllCategories.fulfilled,
            (state, action: PayloadAction<ICategory[]>) => ({
                ...state,
                isLoading: false,
                filteredCategories: action.payload,
                categories: action.payload,
            })
        );
        // state.isLoading = false;
        // state.filteredCategories = action.payload;
        // state.categories = action.payload;
        builder.addCase(
            fetchAllCategories.rejected,
            (state, action: PayloadAction<any>) => ({
                ...state,
                isLoading: false,
                error: action.payload,
            })
        );
        // state.isLoading = false;
        // state.error = action.payload;
    },
});

export const {
    selectionCategory,
    setActiveId,
    setSelector,
    deleteCategory,
    sortCategories,
} = categorySlice.actions;

export default categorySlice.reducer;
