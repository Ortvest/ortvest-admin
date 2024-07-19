import { baseApi } from "./base.api";

export const ordersApi = {
  getOrders: () => {
    return baseApi
      .get("orders/all", {
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "http://localhost:8080",
        },
      })
      .then((response) => console.log("response", response));
  },
};
