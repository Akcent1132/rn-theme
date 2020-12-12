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
var ThemeProvider = function (_a) {
    var children = _a.children, themes = _a.themes;
    var _themes = React.useMemo(function () {
        return themes;
    }, [JSON.stringify(themes)]);
    return (React.createElement(context_1.ThemeContext.Provider, { value: _themes }, children));
};
exports.default = ThemeProvider;
