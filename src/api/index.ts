import axios from 'axios';

import { API_BASE_URL, API_ENDPOINT } from './endpoints';

export const api = axios.create({
  baseURL: `${API_BASE_URL}${API_ENDPOINT}`,
});

api.interceptors.request.use(
  (config) => {
    config.headers['x-hasura-admin-secret'] = process.env.REACT_APP_REQUEST_TOKEN;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
