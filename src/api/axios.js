import axios from 'axios';
const apiUrl =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'https://chisel-equal-broker.glitch.me/api';
const axiosPublic = axios.create({
    baseURL: apiUrl,
});
export default axiosPublic;
export const axiosPrivate = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});
