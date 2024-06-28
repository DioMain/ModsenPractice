import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchInfo { 
    search: string, 
    filter: string, 
    category: string,
    startIndex: number
}

const initialState: SearchInfo  = { search: "", filter: "relevance", category: "all", startIndex: 0 };

export const searchInfoSlice = createSlice({
    name: "searchInfo",
    initialState,
    reducers: {
        setSearchInfo: (state, action: PayloadAction<SearchInfo>) => {
            state.search = action.payload.search;
            state.filter = action.payload.filter;
            state.category = action.payload.category;
            state.startIndex = action.payload.startIndex;
        },
        addToStartIndex: (state, action: PayloadAction<{ count: number }>) => {
            state.startIndex += action.payload.count;
        }
    }
})

export const { setSearchInfo, addToStartIndex } = searchInfoSlice.actions;

export default searchInfoSlice.reducer;