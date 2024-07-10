import { AdminApi } from "../../shared/enums/Api";
import { HttpMethods } from "../../shared/enums/HttpMethods";
import { Credentials, User } from "../../shared/interfaces/Auth.interfaces";
import { baseApi } from "./base.api";

const accessToken = import.meta.env.ACCESS_TOKEN;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<User, Credentials>({
      query: (data: Credentials) => ({
        url: AdminApi.SIGN_IN,
        method: HttpMethods.POST,
        body: data,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
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

export const { useSignInMutation } = authApi;
