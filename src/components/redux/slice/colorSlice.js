import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
    name: 'rgb',
    initialState: {
        color: 'blue'
    },
    reducers: {
        newColor: (state, action) => { state.color = action.payload }
    }
})

export const { newColor } = colorSlice.actions
export default colorSlice.reducer