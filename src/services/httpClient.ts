import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? 'https://api.mi-organizacion.test';

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

axiosClient.interceptors.request.use((config) => {
  // Aquí podremos inyectar token de autenticación en futuras fases
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Placeholder para manejo de errores centralizados en fases posteriores
    return Promise.reject(error);
  }
);
