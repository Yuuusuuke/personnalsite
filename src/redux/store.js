import {configureStore} from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode";
import teasReducer from "./teas";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        teas: teasReducer
    }
})