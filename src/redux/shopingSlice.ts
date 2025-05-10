/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductType } from "@/constants/helpers/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    IncrementQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decrimentQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existingProduct) {
        if (existingProduct.quantity! > 1) {
          existingProduct.quantity! -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },

    addToFavorite: (state, action) => {
      const existingProduct = state.favorite?.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item?.id !== action.payload?.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item?.id !== action.payload
      );
    },
    resetFavorite: (state) => {
      state.favorite = [];
    },
  },
});

export const {
  addToCart,
  IncrementQuantity,
  decrimentQuantity,
  removeFromCart,
  addToFavorite,
  resetFavorite,
  resetCart,
  removeFromFavorite,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
