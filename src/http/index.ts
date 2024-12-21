import axios from 'axios'

export const API_URL = `https://quiz-backend-f7plhrne7-ivans-projects-48acc24d.vercel.app/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;