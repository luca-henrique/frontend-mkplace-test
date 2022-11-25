import axios from 'axios';

export const BASE_URL =
  'https://frontend-mkplace-test-4fvw1l8f1-luca-henrique.vercel.app/api';

export const instance = axios.create({
  baseURL: BASE_URL,

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
