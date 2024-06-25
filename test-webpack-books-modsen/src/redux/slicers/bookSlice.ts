import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Book from '../../types/book'

const initialState: { value: Book | undefined } = { value: undefined };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook: (state, action: PayloadAction<Book | undefined>) => {
            state.value = action.payload;
        },
        dropBook: (state) => {
            state.value = undefined
        }
    }
})

export const { setBook, dropBook } = bookSlice.actions;

export default bookSlice.reducer;