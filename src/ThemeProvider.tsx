import * as React from "react";
import { Themes } from "./types";
import { ThemeContext } from "./context";



export type ThemeProviderProps = {
    children: React.ReactChild,
    themes: Themes
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themes}) => {

    const _themes: any = React.useMemo(()=>{
        return themes
    },[JSON.stringify(themes)]);

    return (
        <ThemeContext.Provider value={_themes}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider