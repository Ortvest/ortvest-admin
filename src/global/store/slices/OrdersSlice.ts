import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Order,
  OrdersState,
} from "../../../shared/interfaces/Orders.interfaces";

const initialState: OrdersState = {
  allOrders: [],
  selectedOrder: null,
  statuses: [
    {
      label: "Pending",
      bgColor: "#FFC062", // Orange
    },
    {
      label: "Discussion",
      bgColor: "#00A3FE", // Blue
    },
    {
      label: "In progress",
      bgColor: "#2ecc71", // Light Green
    },
    {
      label: "MVP",
      bgColor: "#e91e63", // Pink
    },
    {
      label: "Done",
      bgColor: "#27ae60", // Dark Green
    },
    {
      label: "Cancelled",
      bgColor: "#c0392b", // Dark Red
    },
  ],
};

export const OrderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    setAllOrders(state, action: PayloadAction<Order[]>) {
      state.allOrders = action.payload;
    },
    setSelectedOrder(state, action: PayloadAction<string>) {
      state.selectedOrder =
        state.allOrders.find((order: Order) => order._id === action.payload) ||
        null;
    },
  },
});

export const { setAllOrders, setSelectedOrder } = OrderSlice.actions;

export const OrdersReducer = OrderSlice.reducer;
