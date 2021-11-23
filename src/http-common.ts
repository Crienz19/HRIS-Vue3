import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: 'https://hr.ziptravel.com.ph/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default http;