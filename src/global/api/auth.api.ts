import axios from "axios";
import { baseApi } from "./base.api";
import { Credentials } from "../../shared/interfaces/Auth.interfaces";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const backendUrl = import.meta.env.VITE_BACKEND_APP;

export const authApi = {
  signIn: async (credentials: Credentials) => {
    return await axios
      .post(`${backendUrl}/auth/signin`, credentials, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          mode: "cors",
        },
      })
      .then((response) => response.data);
  },
  signUp: () => {
    return baseApi.post("/auth/signup").then((response) => response.data);
  },
};
