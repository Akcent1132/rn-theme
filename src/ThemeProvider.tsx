import * as React from "react";
import { Themes } from "./types";
import { ThemeContext } from "./context";



export type ThemeProviderProps = {
    children: React.ReactChild,
    themes: Themes
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themes}) => {
    return (
        <ThemeContext.Provider value={themes}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider