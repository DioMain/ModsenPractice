import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: GoogleBooksApiOptions = { search: "", orderBy: "relevance", category: "all", startIndex: 0 };

export const searchInfoSlice = createSlice({
  name: "searchInfo",
  initialState,
  reducers: {
    setSearchInfo: (state, action: PayloadAction<GoogleBooksApiOptions>) => {
      state.search = action.payload.search;
      state.orderBy = action.payload.orderBy;
      state.category = action.payload.category;
      state.startIndex = action.payload.startIndex;
    },
    addToStartIndex: (state, action: PayloadAction<{ count: number }>) => {
      state.startIndex += action.payload.count;
    },
  },
});

export const { setSearchInfo, addToStartIndex } = searchInfoSlice.actions;

export default searchInfoSlice.reducer;
