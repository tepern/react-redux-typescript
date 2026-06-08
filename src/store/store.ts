import { configureStore } from '@reduxjs/toolkit';
import order from './feature/order/orderSlice';
import general from './feature/order/creatorSlice';

export const store = configureStore({
  reducer: {
    order: order,
    general: general
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;