import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
import { ThemeBase } from "./types";

const useStyleSheet = function <Theme extends ThemeBase<{}>>(themeName?:string): Theme {

    const themes = React.useContext(ThemeContext);

    const switcher = React.useContext(ThemeSwitcherContext);

    const theme: Theme = themes[themeName || switcher.themeName] as any;

    return theme
}

export default useStyleSheet