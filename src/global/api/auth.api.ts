import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),

  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/core/orders`,
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NSwiZXhwIjo0ODc2MTEyMzYxfQ.gpU9LdjNcKy-IDaSVXIlCjg0bpx9xGn4q1An7yq_Bn4",
          mode: "no-cors",
          "Allow-Control-Allow-Origin": "*",
        },
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          if (err instanceof Error) {
            throw new Error(err.message);
          }
        }
      },
    }),
  }),
});

//@ts-ignore
export const { useGetAllOrdersQuery } = pokemonApi as any;
