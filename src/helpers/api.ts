import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {ApiError} from '@/types';
import {useAppSelector} from '@/hooks';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export const injectToken = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const {token} = useAppSelector(state => state.auth);
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const defaultOptions: Partial<AxiosRequestConfig> = {
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

class ApiClient {
  private instance: AxiosInstance | null = null;

  constructor() {}

  private get client() {
    return this.instance || this.initClient();
  }

  request<T = any, R = AxiosResponse<T>>(
    requestConfig: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.request<T, R>(requestConfig);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.delete<T, R>(url, config);
  }

  private initClient() {
    const instance = axios.create(defaultOptions);
    instance.interceptors.request.use(injectToken, Promise.reject);
    instance.interceptors.response.use(response => response, this.handleError);

    this.instance = instance;
    return instance;
  }

  private handleError(
    error: AxiosError<AxiosError | ApiError>,
  ): Promise<ApiError> {
    switch (error.status) {
      // Add scenario-specific handlers here
      case StatusCode.Unauthorized: {
        // TODO: Refresh token and retry request ?
        return Promise.reject({
          status: error.status,
          message: error.message,
        });
      }
      default: {
        return Promise.reject({
          status: error.status || 500,
          message: error.response?.data.message || error.message,
        });
      }
    }
  }
}

export const apiClient = new ApiClient();
export default apiClient;
