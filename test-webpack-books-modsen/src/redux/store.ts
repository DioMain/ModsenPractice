import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./slices/bookSlice";
import searchInfoReducer from "./slices/searchInfoSlice";

export const store = configureStore({
    reducer: {
        book: bookReducer,
        searchInfo: searchInfoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch