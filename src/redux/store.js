import {configureStore} from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode";
import teasReducer from "./teas";
import projectsReducer from "./projects";
import guildwars2Reducer from "./gw2";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        teas: teasReducer,
        projects: projectsReducer,
        guildwars2: guildwars2Reducer,
    }
})