import { createSlice } from "@reduxjs/toolkit";
import data from "../ressources/projects.json";

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        list : {},
    },
    reducers:{
        getProjectsData: state => {
            state.list = data.projects;
        }
    }
})

export const {getProjectsData} = projectsSlice.actions;

export default projectsSlice.reducer;