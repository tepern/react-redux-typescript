import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { OrderItem } from "../../../models/order-item";

const initialState: OrderItem = {
  id: "",
  name: "",
  link: "",
  unit: "",
  quantity: 1,
  price: 0,
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    details: (state, action: PayloadAction<OrderItem>) => {
      state.name = action.payload.name;
      state.link = action.payload.link;
      state.unit = action.payload.unit;
      state.quantity = action.payload.quantity;
      state.price = action.payload.price;
      state.totalPrice = action.payload.price * action.payload.quantity;
    },
  },
});

export const { details } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;
export default orderSlice.reducer;
