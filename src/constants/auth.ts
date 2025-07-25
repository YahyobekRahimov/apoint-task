import { deleteCookie, getCookie, setCookie } from "../utils/auth";

export const ACCESS_TOKEN = "APOINT_TASK_ACCESS_TOKEN";
export const REFRESH_TOKEN = "APOINT_TASK_REFRESH_TOKEN";

export const getAccessToken = () => getCookie(ACCESS_TOKEN);
export const getRefreshToken = () => getCookie(REFRESH_TOKEN);

export const setAccessToken = (access: string, expiresIn?: number) =>
  setCookie(ACCESS_TOKEN, access, expiresIn ?? undefined);

export const setRefreshToken = (
  refresh: string,
  expiresIn?: number
) => setCookie(REFRESH_TOKEN, refresh, expiresIn ?? undefined);

export const deleteAccessToken = () => deleteCookie(ACCESS_TOKEN);
export const deleteRefreshToken = () => deleteCookie(REFRESH_TOKEN);
