import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../Rducer/Index";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
