import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const backendUrl = import.meta.env.VITE_BACKEND_APP;
export const baseApi = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
