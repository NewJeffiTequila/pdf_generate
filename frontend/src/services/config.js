import axios from 'axios';

export const http = axios.create({
    baseURL:'http://127.0.0.1:3030/api/'
})