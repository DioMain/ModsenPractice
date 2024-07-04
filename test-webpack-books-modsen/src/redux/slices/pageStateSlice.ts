import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PageState from "@apptypes/pageState";

const initialState: { value: PageState } = { value: PageState.Search };

export const pageStateSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    setPageState: (state, action: PayloadAction<PageState>) => {
      state.value = action.payload;
    },
  },
});

export const { setPageState } = pageStateSlice.actions;

export default pageStateSlice.reducer;
