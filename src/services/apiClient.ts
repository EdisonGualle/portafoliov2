import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';

import type { ContactResponse } from '@types/contact';

export class ApiError<T = unknown> extends Error {
  public status?: number;
  public data?: T;
  public isNetworkError: boolean;

  constructor(message: string, options?: { status?: number; data?: T; isNetworkError?: boolean }) {
    super(message);
    this.name = 'ApiError';
    this.status = options?.status;
    this.data = options?.data;
    this.isNetworkError = Boolean(options?.isNetworkError);
  }
}

const baseURL = import.meta.env.VITE_API_BASE_URL ?? '/mock-api';

const apiClient = axios.create({
  baseURL,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

type Adapter = NonNullable<AxiosRequestConfig['adapter']>;

const mockContactAdapter: Adapter = async (config) => {
  await new Promise((resolve) => globalThis.setTimeout(resolve, 700));

  return {
    data: {
      success: true,
      message: '¡Mensaje enviado correctamente! Te responderé en menos de 24 horas.'
    } satisfies ContactResponse,
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    request: {}
  } as AxiosResponse;
};

apiClient.interceptors.request.use((config) => {
  config.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    ...config.headers
  };

  if (config.baseURL?.includes('/mock-api') && config.method === 'post' && config.url?.includes('contact')) {
    config.adapter = mockContactAdapter;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const message =
      (error.response?.data as { message?: string } | undefined)?.message ??
      error.message ??
      'Ha ocurrido un error al comunicarse con el servidor.';

    return Promise.reject(
      new ApiError(message, {
        status,
        data: error.response?.data,
        isNetworkError: !error.response
      })
    );
  }
);

export default apiClient;
