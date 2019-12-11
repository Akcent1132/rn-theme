import * as React from "react";
import { ThemeContext } from "./context";
var ThemeProvider = function (_a) {
    var children = _a.children, themes = _a.themes;
    return (React.createElement(ThemeContext.Provider, { value: themes }, children));
};
export default ThemeProvider;
