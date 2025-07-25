import { configureStore } from "@reduxjs/toolkit";
import apiClient from "../services/api-client";
import { rtkQueryErrorLogger } from "@/services/middleware";
import { authReducer } from "./slices/authSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiClient.middleware,
      rtkQueryErrorLogger
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export const getRootState = () => store.getState();
export default store;
