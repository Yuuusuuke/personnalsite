import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        active : false,
    },
    reducers:{
        switchMode: state => {
            state.active = !state.active;
        }
    }
})

export const {switchMode} = darkModeSlice.actions;

export default darkModeSlice.reducer;