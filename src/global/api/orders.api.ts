import { baseApi } from "./base.api";

export const ordersApi = {
  getOrders: () => {
    return baseApi
      .get("orders/all", {
        headers: {
          "Content-Type": "application/json",
          //   "Allow-Control-Allow-Origin":
          //     "https://ortvest-website-backend.vercel.app/",
        },
      })
      .then((response) => console.log("response", response));
  },
};
