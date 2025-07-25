import axios, { type AxiosInstance } from "axios";

let BASE_URL = import.meta.env.VITE_API_URL;

export const axiosAuth: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   // "Content-Type": "application/json",
  // },
});
