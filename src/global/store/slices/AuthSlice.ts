import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../shared/interfaces/Auth.interfaces";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuth } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
