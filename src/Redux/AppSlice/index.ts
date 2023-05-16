import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {axios} from "Configs/ApiConfig";

export interface AppState {
    isLoading: boolean;
    products: any[];
    users: any[];
    list: any[];
};

const initialState: AppState = {
    isLoading: true,
    products: [],
    users: [],
    list: []
};

// const products = axios.get("products");
// const users = axios.get("users");

export const getData = createAsyncThunk("users", async () => {
    try {
        const products = await axios.get("products");
        const users = await axios.get("users");
        return {
            products: products.data,
            users: users.data
        }
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
        setDataToList: (state, action: PayloadAction<any>) => {
            state.list.push(action.payload);
        },
        deleteItemFromList: (state, action: PayloadAction<any>) => {
            state.list = state.list.filter((item) => item.id !== action.payload)
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