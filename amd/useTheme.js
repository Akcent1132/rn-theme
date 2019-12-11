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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "react", "./context", "react-native"], function (require, exports, React, context_1, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var useTheme = function (stylesCallback, props, themeName) {
        if (props === void 0) { props = {}; }
        if (themeName === void 0) { themeName = 'default'; }
        var themes = React.useContext(context_1.ThemeContext);
        var theme = themes[themeName];
        var styles = react_native_1.StyleSheet.create(__assign({}, stylesCallback(theme, props)));
        return [styles, theme];
    };
    exports.default = useTheme;
});
