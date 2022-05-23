import {configureStore} from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode";
import teasReducer from "./teas";
import projectsReducer from "./projects";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        teas: teasReducer,
        projects: projectsReducer,
    }
})