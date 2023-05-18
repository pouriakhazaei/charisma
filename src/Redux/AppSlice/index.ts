import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {axios} from "Configs/ApiConfig";
import {AppState, List} from "./Types";

const initialState: AppState = {
    isLoading: true,
    products: [],
    users: [],
    list: []
};

const products = axios.get("products");
const users = axios.get("users");

export const getData = createAsyncThunk("appData", async () => {
    try {
        const response = await axios.all([products, users]);
        return {
            products: response[0].data,
            users: response[1].data
        };
    } catch (error) {
        console.error(error);
    };
});

export const findArrayByTextSearch = (array: any[], value: string, target: string) => {
    if (!Array.isArray(array) || typeof value !== "string") {
        return [];
    };
    return array.filter((item) => item[target].toLowerCase().indexOf(value.toLowerCase()) > -1);
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDataToList: (state, action: PayloadAction<List>) => {
            state.list.push(action.payload);
        },
        deleteItemFromList: (state, action: PayloadAction<string | number>) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        clearList: (state) => {
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload?.products;
            state.users = action.payload?.users;
            state.isLoading = false;
        })
        builder.addCase(getData.rejected, (state) => {
            state.isLoading = false;
        })
    }
});
export const {setDataToList, deleteItemFromList, clearList} = appSlice.actions;

export default appSlice.reducer;