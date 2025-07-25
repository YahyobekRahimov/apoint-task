import { useAppDispatch } from "@/store";
import { loginCheck } from "@/store/slices/authSlice";
import { useLayoutEffect } from "react";

export default function AuthInitializer() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(loginCheck());
  }, [dispatch]);

  return null;
}
