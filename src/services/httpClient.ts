import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://api.mi-organizacion.test',
  headers: {
    'Content-Type': 'application/json'
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
