var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "react", "./context"], function (require, exports, React, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var useStyleSheet = function (themeName) {
        var themes = React.useContext(context_1.ThemeContext);
        var switcher = React.useContext(context_1.ThemeSwitcherContext);
        var theme = themes[themeName || switcher.themeName];
        return theme;
    };
    exports.default = useStyleSheet;
});
