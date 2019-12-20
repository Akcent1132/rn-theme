import * as React from "react";
import { ThemeSwitcherContext } from "./context";

const ThemeSwitcher: React.FC<{themeName: string}> = ({children, themeName}) =>{
    return (
        <ThemeSwitcherContext.Provider value={{
            themeName
        }}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}

export default ThemeSwitcher