import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Order,
  OrdersState,
} from "../../../shared/interfaces/Orders.interfaces";

const initialState: OrdersState = {
  allOrders: [],
  selectedOrder: null,
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
