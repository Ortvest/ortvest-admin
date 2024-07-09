import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AuthReducer } from "./slices/AuthSlice";
const rootReducer = combineReducers({
  authReducer: AuthReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
