import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bossList from "../ressources/bossList.json";

export const guildwars2Slice = createSlice({
    name: "guildwars2",
    initialState: {
        bossList : bossList,
        token: undefined,
        accountName: "",
        raidData: undefined,
        status: 0,
        message: "",
    },
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAccountData.fulfilled, (state, action) => {
            state.status = action.payload.status;
            state.message = action.payload.res.text;
            if(action.payload.ok){
                state.accountName = action.payload.res.name;
            }
        });
        builder.addCase(getRaidData.fulfilled, (state, action) => {
            console.log(action);
            state.status = action.payload.status;
            state.message = action.payload.res.text;
            if(action.payload.ok){
                state.raidData = action.payload.res;
            }
        });
    }
})

export const {setToken} = guildwars2Slice.actions;

export default guildwars2Slice.reducer;

export const getAccountData = createAsyncThunk("guildwars2/getAccountData", async (TOKEN) =>{
    const response = await fetch("https://api.guildwars2.com/v2/account?access_token=" + TOKEN, {
        method: "GET"
    });
    const res = await response.json();
    return {res, status: response.status, message: response.statusText, ok: response.ok}; // Use every important data from the http request
})

export const getRaidData = createAsyncThunk("guildwars2/getRaidData", async (TOKEN) =>{
    const response = await fetch("https://api.guildwars2.com/v2/account/raids?access_token=" + TOKEN, {
        method: "GET"
    });
    const res = await response.json();
    return {res, status: response.status, message: response.statusText, ok: response.ok}; // Use every important data from the http request
})