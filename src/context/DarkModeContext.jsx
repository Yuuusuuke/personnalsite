import React, { useState } from "react";

export const darkModeContext = React.createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode, swapMode] = useState(false);

    return(
        <darkModeContext.Provider value={[darkMode, swapMode]}>
            {children}
        </darkModeContext.Provider>
    )
}