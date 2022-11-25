import axios from 'axios';

export const BASE_URL_PROD =
  'https://frontend-mkplace-test-4fvw1l8f1-luca-henrique.vercel.app/api';

export const BASE_URL_LOCAL = 'http://localhost:3000/api';

export const instance = axios.create({
  baseURL: BASE_URL_LOCAL,

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
