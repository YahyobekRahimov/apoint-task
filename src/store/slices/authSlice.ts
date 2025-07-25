import { authService } from "@/services/features/auth";
import {
  deleteAccessToken,
  deleteRefreshToken,
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "./../../constants/auth";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginRes } from "@/services/features/auth/types";

interface InitialState {
  isAuthenticated: boolean | null;
  userData: Partial<LoginRes>;
  tokens: {
    access: string;
    refresh: string;
  };
}

const initialState: InitialState = {
  isAuthenticated: null,
  userData: {},
  tokens: {
    access: "",
    refresh: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.tokens.access = "";
      state.tokens.refresh = "";
      state.isAuthenticated = false;
      deleteAccessToken();
      deleteRefreshToken();
    },
    login: (
      state,
      action: PayloadAction<{
        access: string;
        refresh: string;
        userData: Partial<LoginRes>;
      }>
    ) => {
      const { access, refresh } = action.payload;

      state.isAuthenticated = true;
      state.tokens.access = access;
      state.tokens.refresh = refresh;
      state.userData = action.payload.userData;

      setAccessToken(access);
      setRefreshToken(refresh);
    },
    loginCheck: (state) => {
      const access = getAccessToken();

      if (access) {
        state.isAuthenticated = true;
        state.tokens.access = access;
      } else {
        state.isAuthenticated = false;
      }
    },
    setUserData: (state, action: PayloadAction<LoginRes>) => {
      state.userData = action.payload;
    },
    setTokens: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      const { access, refresh } = action.payload;

      state.tokens.access = access;
      state.tokens.refresh = refresh;
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      const access = action.payload;
      state.tokens.access = access;
      setAccessToken(access);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authService.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuthenticated = true;
        state.tokens.access = payload.token.token;
        state.userData = payload;
        setAccessToken(payload.token.token);
      }
    );
  },
});

export const {
  login,
  logout,
  loginCheck,
  setTokens,
  setUserData,
  updateAccessToken,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
