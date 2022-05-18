import { createSlice } from "@reduxjs/toolkit";
import data from "../ressources/thes.json";

export const teasSlice = createSlice({
    name: "teas",
    initialState: {
        list : {},
    },
    reducers:{
        getTeasData: state => {
            state.list = data;
        }
    }
})

export const {getTeasData} = teasSlice.actions;

export default teasSlice.reducer;