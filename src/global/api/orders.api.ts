import { baseApi } from "./base.api";

export const ordersApi = {
  getOrders: () => {
    return baseApi
      .get("/orders/all")
      .then((response) => console.log("response", response));
  },
};
