import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import searchInfoReducer from "./slices/searchInfoSlice";
import userReducer from "./slices/userSlice";
import PageStateReducer from "./slices/pageStateSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    searchInfo: searchInfoReducer,
    user: userReducer,
    pageState: PageStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
