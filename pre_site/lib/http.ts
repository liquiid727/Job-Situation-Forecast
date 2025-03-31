
import axios, { AxiosRequestConfigDefaults, InstanceType } from 'axios';
type AxiosInstance = InstanceType<typeof axios>;
type AxiosResponse = ReturnType<typeof axios>;

// 创建axios实例
const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在这里可以添加token等全局请求头
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做统一处理
    return response.data;
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          break;
        case 404:
          // 处理未找到
          break;
        case 500:
          // 处理服务器错误
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

// 封装常用HTTP方法
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return http.get(url, config);
};

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.post(url, data, config);
};

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.put(url, data, config);
};

export const del = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return http.delete(url, config);
};

export default http;