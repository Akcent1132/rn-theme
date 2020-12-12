"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var context_1 = require("./context");
var useTheme = function (stylesCallback, props, themeName) {
    if (props === void 0) { props = {}; }
    var themes = React.useContext(context_1.ThemeContext);
    var switcher = React.useContext(context_1.ThemeSwitcherContext);
    var theme = themes[themeName || switcher.themeName];
    var _style = stylesCallback(theme, props);
    var styles = React.useMemo(function () {
        return _style;
    }, [JSON.stringify(_style)]);
    return [styles, theme];
};
exports.default = useTheme;
