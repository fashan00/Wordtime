import { apiInstance } from './api';

export const get = async (params) => await apiInstance.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${params}?key=29a2a4c0-3d0e-4cc7-874c-4fe919077297`);