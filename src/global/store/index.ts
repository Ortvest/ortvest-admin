import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AuthReducer } from "./slices/AuthSlice";
import { pokemonApi } from "../api/auth.api";
import { OrdersReducer } from "./slices/OrdersSlice";
const rootReducer = combineReducers({
  authReducer: AuthReducer,
  orderReducer: OrdersReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(pokemonApi.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
