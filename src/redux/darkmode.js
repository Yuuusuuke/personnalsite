import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        active : false,
    },
    reducers:{
        switchMode: state => {
            state.active = !state.active;
        },
        setMode: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {switchMode, setMode} = darkModeSlice.actions;

export default darkModeSlice.reducer;