import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: 'http://hris-api.test',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    }
});

export default http;