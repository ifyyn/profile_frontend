import axios from "axios";

const config = {
  baseURL: "https://web-production-fcd8.up.railway.app/api/v1",
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
