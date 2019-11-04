import { apiInstance } from './api';

export const getPostgres = async (params) => await apiInstance.get('/api/postgres', params);