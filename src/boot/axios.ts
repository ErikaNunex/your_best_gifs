import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const baseURL = import.meta.env.VITE_API_BASE_URL;
// const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${apiKey}`,
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
