import axios from 'axios';
const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'http://localhost:5000/api';
export default axios.create({
    baseURL: apiUrl,
});
export const axiosPrivate = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});
