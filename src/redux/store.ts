import { configureStore } from "@reduxjs/toolkit";
import shopingReducer from "./shopingSlice";

export const store = configureStore({
  reducer: {
    shoping: shopingReducer,
  },
});
