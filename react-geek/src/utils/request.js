import axios from "axios";

// 封装 axios 实例
const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 15000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
