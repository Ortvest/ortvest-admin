import { baseApi } from "./base.api";

export const authApi = {
  signIn: () => {
    return baseApi.post("/auth/signin").then((response) => response.data);
  },
  signUp: () => {
    return baseApi.post("/auth/signup").then((response) => response.data);
  },
};
