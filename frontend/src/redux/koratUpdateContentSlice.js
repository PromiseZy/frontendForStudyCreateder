import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    koratUpdataContent: "hello korat",
}

export const koratUpdataContentSlice = createSlice({
    name: 'contents',
    initialState,
    reducers: {
        editUpdate: (state) => {
            state.koratUpdataContent = state
        }
    }
})

export const {editUpdate} = koratUpdataContentSlice.actions;
export default koratUpdataContentSlice.reducer;