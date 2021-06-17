import axios from "axios";
import { LSManager } from "core/utils/localstoragemanager";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + "/api/v1",
  timeout: 2000,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: ""
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = "Bearer " + LSManager.getToken();
    // Must return config
    return config;
  },
  (error: Error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosClient;
