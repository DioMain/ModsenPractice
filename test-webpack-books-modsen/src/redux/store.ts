import { configureStore } from "@reduxjs/toolkit";
import searchInfoReducer from "./slices/searchInfoSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    searchInfo: searchInfoReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
