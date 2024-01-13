import axios from 'axios';
import axiosInstance from './axios.config';

const ApiService = {
  get: async (path, params) => {
    const { data } = await axiosInstance.get(path, { params });

    return data;
  },
  post: async (path, params) => {
    const { data } = await axiosInstance.post(path, params);

    return data;
  },
  put: async (path, params) => {
    const { data } = await axiosInstance.put(path, params);

    return data;
  },
  delete: async (path, params) => {
    const { data } = await axiosInstance.delete(path, { params });

    return data;
  },
};

export default ApiService;
