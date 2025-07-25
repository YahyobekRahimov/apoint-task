import {
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../constants/auth";
import { API_BASE_URL, TagTypes } from "../constants/general";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const accessToken = getAccessToken();

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

const apiClient = createApi({
  reducerPath: "apiClient",

  baseQuery: baseQueryWithRetry,

  tagTypes: Object.values(TagTypes),

  endpoints: () => ({}),
});

export default apiClient;
