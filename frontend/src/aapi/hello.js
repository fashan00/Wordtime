import { apiInstance } from './api';

export const getHello = async (params) => await apiInstance.get('/api/hello', params);