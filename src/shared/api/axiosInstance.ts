import axios from 'axios';

export const BASE_URL = 'https://api.rawg.io/api';

export const API_KEY = '67c1a256250b42ff9f60d4342410f9b8';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
