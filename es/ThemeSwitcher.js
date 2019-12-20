import * as React from "react";
import { ThemeSwitcherContext } from "./context";
var ThemeSwitcher = function (_a) {
    var children = _a.children, themeName = _a.themeName;
    return (React.createElement(ThemeSwitcherContext.Provider, { value: {
            themeName: themeName
        } }, children));
};
export default ThemeSwitcher;
