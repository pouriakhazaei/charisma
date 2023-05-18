import {Products, Users} from "Interfaces";

export interface List {
    id: string | number;
    text: string;
};

export interface AppState {
    isLoading: boolean;
    products: Products[];
    users: Users[];
    list: List[];
};