import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./slicers/bookSlice";
import searchInfoReducer from "./slicers/searchInfoSlice";

export const store = configureStore({
    reducer: {
        book: bookReducer,
        searchInfo: searchInfoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch