import {configureStore} from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode";

export default configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})