import { deleteAccessToken, getAccessToken } from "@/constants/auth";
import type { Middleware } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const payload: any = action.payload;
      const error_message =
        payload?.data?.detail ??
        payload?.data?.message ??
        payload?.data?.msg ??
        payload?.data?.err?.message ??
        "";
      if (
        error_message &&
        error_message !== "A validation error occurred."
      ) {
        toast.error(error_message);
      }

      const errors = payload?.data?.errors ?? "";
      if (errors.length > 0) {
        errors.forEach((item: string) => {
          if (item) {
            toast.warning(item);
          }
        });
      }

      const status = payload?.status;

      if (status === 500) {
        toast.warning(
          "Server bilan bog'liq xatolik. Iltimos bu haqda ma'sul xodimlarga xabar bering"
        );
      } else if (status === 401 && getAccessToken()) {
        toast.warning("Iltimos avval tizimga kiring!");
        deleteAccessToken();
        window.location.href = "/";
      }
    }

    return next(action);
  };
