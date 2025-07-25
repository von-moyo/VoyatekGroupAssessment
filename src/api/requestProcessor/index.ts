import axios from "axios";
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import Cookies from 'js-cookie';

// Create axios instances
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const axiosInstanceUnauth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Axios request interceptor for authenticated instance
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get Access Token from cookies
    const access_token = Cookies.get('access_token');
    // Add Bearer API Key
    if (access_token && config.headers) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// API Request Functions
interface ApiRequestProps {
  url: string;
  config?: AxiosRequestConfig;
  data?: unknown;
}

// Axios request functions
export async function getRequest(request: ApiRequestProps) {
  return await axiosInstance.get(request.url, request.config);
}

export async function postRequest(request: ApiRequestProps) {
  return await axiosInstance.post(request.url, request.data, request.config);
}

export async function putRequest(request: ApiRequestProps) {
  return await axiosInstance.put(request.url, request.data, request.config);
}

export async function patchRequest(request: ApiRequestProps) {
  return await axiosInstance.patch(request.url, request.data, request.config);
}

export async function deleteRequest(request: ApiRequestProps) {
  return await axiosInstance.delete(request.url, request.config);
}