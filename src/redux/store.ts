/* eslint-disable prefer-const */
import { configureStore } from "@reduxjs/toolkit";
import shopingReducer from "./shopingSlice";
import { persistStore, persistReducer, WebStorage } from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, shopingReducer);

export const store = configureStore({
  reducer: {
    shoping: persistedReducer,
  },
});

export let persistor = persistStore(store);
