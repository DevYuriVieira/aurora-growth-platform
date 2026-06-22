import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6a3827b7c105017aa639b3fc.mockapi.io/metas/teste',
  timeout: 10000,
});