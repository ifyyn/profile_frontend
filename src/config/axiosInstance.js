import axios from "axios";

const config = {
  baseURL: "http://localhost:3000/api/v1",
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
