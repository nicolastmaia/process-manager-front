import axios from 'axios';

export const stageApi = axios.create({
  // baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  baseURL: 'http://localhost:8000',
});

export const ibgeApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
});
