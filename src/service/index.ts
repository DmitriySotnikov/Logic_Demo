import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ICategory} from "../models/ICatagory";

export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICategory[]>("categories.json")
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка загрузки")
        }
    }
)

