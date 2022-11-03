import * as React from "react";
import { ThemeSwitcherContext } from "./context";
var ThemeSwitcher = function (_a) {
    var children = _a.children, themeName = _a.themeName;
    var value = React.useMemo(function () { return ({
        themeName: themeName
    }); }, [themeName]);
    return (React.createElement(ThemeSwitcherContext.Provider, { value: value }, children));
};
export default ThemeSwitcher;
