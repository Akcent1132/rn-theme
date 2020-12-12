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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "hoist-non-react-statics", "react", "./useTheme"], function (require, exports, hoist_non_react_statics_1, react_1, useTheme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    hoist_non_react_statics_1 = __importDefault(hoist_non_react_statics_1);
    react_1 = __importDefault(react_1);
    useTheme_1 = __importDefault(useTheme_1);
    var withStyles = function (stylesCallback, themeName) {
        if (themeName === void 0) { themeName = function () { return 'default'; }; }
        return function (WrappedComponent) {
            var Wrapper = function (props) {
                var _a = useTheme_1.default(stylesCallback, props, themeName(props)), styles = _a[0], theme = _a[1];
                return (react_1.default.createElement(WrappedComponent, __assign({}, props, { styles: styles, theme: theme })));
            };
            return hoist_non_react_statics_1.default(Wrapper, WrappedComponent);
        };
    };
    exports.default = withStyles;
});
