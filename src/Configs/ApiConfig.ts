import axios from "axios";

import {ExtendedAxiosConfig} from "Interfaces";
import Api from "Constatns/Api";

axios.defaults.baseURL = Api.BaseUrl;

axios.interceptors.request.use(
    (config: ExtendedAxiosConfig) => {
        const accessToken = "";
        if (config?._addToken !== false) {
            if (accessToken) {
                config.headers.Authorization = accessToken;
                return config;
            } else {
                return Promise.resolve(config);
            };
        } else {
            return config;
        };
    }, error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const originalRequest = error.config;
        if (error?.response?.status === 400) {};
        if (error?.response?.status === 401) {};
        return Promise.reject(error);
    }
);

export {axios};