import axios from 'axios';
import { useSessionStore } from '@/store/session';

const baseConfig = {
  baseURL:'http://localhost:3000/api',
  timeout: 60 * 1000,
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use((config) => {
  const newConfig = config;
  const sessionStore = useSessionStore();

  if (config.headers && sessionStore.hasSession) {
    newConfig.headers.USER_EMAIL = sessionStore.email;
    newConfig.headers.USER_TOKEN = sessionStore.authentication_token;
    newConfig.headers['Cache-Control'] = 'no-cache';
  }
  return newConfig;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
  },
);

export default axiosInstance;
