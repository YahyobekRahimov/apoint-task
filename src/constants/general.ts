export const API_HOST = "https://apialfa.apoint.uz";
export const API_BASE_URL = `${API_HOST}/v1`;

export const TagTypes = {
  USER: "User",
} as const;

export type TagTypes = (typeof TagTypes)[keyof typeof TagTypes];
