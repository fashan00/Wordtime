import axios from 'axios';

export const buildApi = () => {
    const defaultOptions = {
    baseURL: 'http://localhost:4000',
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  return instance;
};


export const apiInstance = buildApi();