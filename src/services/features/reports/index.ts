import apiClient from "@/services/api-client";
import type { MaterialsParams, MaterialsRes } from "./types";

const reportsApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getMaterials: build.query<MaterialsRes[], MaterialsParams>({
      query: (params) => ({
        url: "reports/reports/materials",
        params,
      }),
    }),
  }),
});

export const { useGetMaterialsQuery } = reportsApi;
