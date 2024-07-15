import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
export const baseApi = axios.create({
  baseURL: "https://ortvest-website-backend.vercel.app/",
  withCredentials: true,
  headers: {
    "Allow-Control-Allow-Origin": "*",
    Authorization: `Bearer ${accessToken}`,
  },
});
