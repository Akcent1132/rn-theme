import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
var useStyleSheet = function (themeName) {
    var themes = React.useContext(ThemeContext);
    var switcher = React.useContext(ThemeSwitcherContext);
    var theme = themes[themeName || switcher.themeName];
    return theme;
};
export default useStyleSheet;
