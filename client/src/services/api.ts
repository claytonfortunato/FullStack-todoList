import axios from "axios";
import { getUserLocalStorage } from "../contexts/Auth/utils";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
