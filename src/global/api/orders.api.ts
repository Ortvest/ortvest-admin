import axios from "axios";
import { useAppDispatch } from "../../shared/hooks/redux.hooks";
import { OrderSlice } from "../store/slices/OrdersSlice";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const backendUrl = import.meta.env.VITE_BACKEND_APP;

export const getOrders = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  await axios
    .get(`${backendUrl}/orders/all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "cors",
      },
    })
    .then((response) => {
      if (response.data) {
        const allOrders = response.data;
        dispatch(OrderSlice.actions.setAllOrders(allOrders));
      }
    })
    .catch((err) => console.error(err));
};

export const updateOrderStatus = async (
  dispatch: ReturnType<typeof useAppDispatch>,
  data: any
) => {
  await axios;
  axios
    .put(`${backendUrl}/orders/update`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "cors",
      },
    })
    .then(() => {
      getOrders(dispatch);
    })
    .catch((err) => console.error(err));
};

export const deleteOrder = async (
  dispatch: ReturnType<typeof useAppDispatch>,
  orderId: string
) => {
  await axios;
  axios
    .delete(`${backendUrl}/orders?orderId=${orderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "cors",
      },
    })
    .then(() => {
      getOrders(dispatch);
    })
    .catch((err) => console.error(err));
};
