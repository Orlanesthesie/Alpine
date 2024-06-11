import { configureStore } from "@reduxjs/toolkit";
import alpineReducer from "../features/alpineSlice";

const store = configureStore({
  reducer: {
    alpine: alpineReducer,
  },
});

export default store;
