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
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import useTheme from "./useTheme";
import { ThemeSwitcherContext } from "./context";
var withStyles = function (stylesCallback, themeName) {
    return function (WrappedComponent) {
        var Wrapper = function (props) {
            var switcher = React.useContext(ThemeSwitcherContext);
            var ownThemeName = themeName ? themeName(props) : undefined;
            var _a = useTheme(stylesCallback, props, ownThemeName || switcher.themeName || 'default'), styles = _a[0], theme = _a[1];
            return (React.createElement(WrappedComponent, __assign({}, props, { styles: styles, theme: theme })));
        };
        return hoistNonReactStatics(Wrapper, WrappedComponent);
    };
};
export default withStyles;
