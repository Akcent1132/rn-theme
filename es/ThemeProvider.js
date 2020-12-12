import * as React from "react";
import { ThemeContext } from "./context";
var ThemeProvider = function (_a) {
    var children = _a.children, themes = _a.themes;
    var _themes = React.useMemo(function () {
        return themes;
    }, [JSON.stringify(themes)]);
    return (React.createElement(ThemeContext.Provider, { value: _themes }, children));
};
export default ThemeProvider;
