import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8002',
  timeout: 1000,
});
