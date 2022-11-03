import * as React from "react";
import { ThemeSwitcherContext } from "./context";

const ThemeSwitcher: React.FC<{themeName: string}> = ({children, themeName}) =>{
    const value = React.useMemo(() => ({
        themeName
    }), [themeName]);
    return (
        <ThemeSwitcherContext.Provider value={value}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}

export default ThemeSwitcher