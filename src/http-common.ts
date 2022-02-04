import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default http;