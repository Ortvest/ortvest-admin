import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_NEST_BACKEND_APP;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  tagTypes: ["Products"],
});
