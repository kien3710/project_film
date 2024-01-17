import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import productReducer from "./features/productSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    product: productReducer,
  },
});
