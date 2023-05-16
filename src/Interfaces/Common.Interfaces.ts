import {AxiosRequestConfig} from "axios";
import {Dispatch} from "react";

export type ReduxGetState = () => any;
export type ReduxDispatch = Dispatch<any>

export interface Action {
    type: string;
    payload: any;
};

export interface ExtendedAxiosConfig extends AxiosRequestConfig {
    _addToken?: boolean;
    headers?: any;
};