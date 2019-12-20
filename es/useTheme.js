var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
import { StyleSheet } from "react-native";
var useTheme = function (stylesCallback, props, themeName) {
    if (props === void 0) { props = {}; }
    var themes = React.useContext(ThemeContext);
    var switcher = React.useContext(ThemeSwitcherContext);
    var theme = themes[themeName || switcher.themeName];
    var styles = StyleSheet.create(__assign({}, stylesCallback(theme, props)));
    return [styles, theme];
};
export default useTheme;
