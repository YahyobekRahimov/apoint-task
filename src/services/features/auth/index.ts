import apiClient from "@/services/api-client";
import type { LoginParams, LoginRes } from "./types";

export const authService = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, LoginParams>({
      query: ({ body, queryParams }) => ({
        url: "/hr/user/sign-in",
        method: "POST",
        body: body,
        params: queryParams,
      }),
    }),
  }),
});

export const { useLoginMutation } = authService;
