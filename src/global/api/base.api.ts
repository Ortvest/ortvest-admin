import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

type BaseApiType = ReturnType<typeof createApi>;

const baseQueryWithRetry: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_APP,
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// export const baseApi: BaseApiType = createApi({
//   reducerPath: "splitApi",
//   baseQuery: baseQueryWithRetry,
//   tagTypes: ["Time", "Posts", "Counter"],
//   endpoints: () => ({}),
// });

// export const enhancedApi: BaseApiType = baseApi.enhanceEndpoints({
//   endpoints: () => ({}),
// });
