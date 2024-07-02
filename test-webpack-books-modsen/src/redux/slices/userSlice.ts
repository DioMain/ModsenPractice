import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import User from '../../types/user';

const initialState: { value: User | undefined } = { value: undefined };

export const bookSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | undefined>) => {
            state.value = action.payload;
        }
    }
})

export const { setUser } = bookSlice.actions;

export default bookSlice.reducer;