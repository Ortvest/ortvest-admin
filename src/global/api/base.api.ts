import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const backendUrl = import.meta.env.VITE_BACKEND_APP;
export const baseApi = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": backendUrl,
    "Access-Control-Allow-Headers": "Authorization, X-Custom-Header",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
    mode: "cors",
  },
});
