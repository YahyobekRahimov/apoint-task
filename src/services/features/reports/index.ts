import apiClient from "@/services/api-client";
import type { MaterialsParams } from "./types";

const reportsApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getMaterials: build.query<MaterialsParams, MaterialsParams>({
      query: (params) => ({
        url: "reports/reports/materials",
        params,
      }),
    }),
  }),
});

export const { useGetMaterialsQuery } = reportsApi;
