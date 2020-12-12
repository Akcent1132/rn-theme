import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
var useTheme = function (stylesCallback, props, themeName) {
    if (props === void 0) { props = {}; }
    var themes = React.useContext(ThemeContext);
    var switcher = React.useContext(ThemeSwitcherContext);
    var theme = themes[themeName || switcher.themeName];
    var _style = stylesCallback(theme, props);
    var styles = React.useMemo(function () {
        return _style;
    }, [JSON.stringify(_style)]);
    return [styles, theme];
};
export default useTheme;
