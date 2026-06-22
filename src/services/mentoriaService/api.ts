import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6a38b0f264a2d8269222ace7.mockapi.io', 
  timeout: 10000,
});