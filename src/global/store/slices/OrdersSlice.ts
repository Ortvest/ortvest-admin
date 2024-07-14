import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Order,
  OrdersState,
} from "../../../shared/interfaces/Orders.interfaces";

const initialState: OrdersState = {
  allOrders: [
    {
      id: "1",
      clientName: "John Doe",
      clientEmail: "example@gmail.com",
      status: "Pending",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime non reiciendis error. Totam voluptatum, aperiam, ipsam omnis ea recusandae ullam excepturi perferendis at dolores, enim tempore blanditiis asperiores necessitatibus?",
      selectedServices: ["Service 1", "Service 2"],
    },
    {
      id: "2",
      clientName: "Jane Doe",
      clientEmail: "example@gmail.com",
      status: "Pending",
      productDescription: "This is a product description",
      selectedServices: ["Service 1", "Service 2"],
    },
    {
      id: "3",
      clientName: "Jane Doe",
      clientEmail: "example@gmail.com",
      status: "Pending",
      productDescription: "This is a product description",
      selectedServices: ["Service 1", "Service 2"],
    },
  ],
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
        state.allOrders.find((order: Order) => order.id === action.payload) ||
        null;
    },
  },
});

export const { setAllOrders, setSelectedOrder } = OrderSlice.actions;

export const OrdersReducer = OrderSlice.reducer;
