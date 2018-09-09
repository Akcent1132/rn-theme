var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./ThemeProvider", "./withStyles"], function (require, exports, ThemeProvider_1, withStyles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ThemeProvider_1 = __importDefault(ThemeProvider_1);
    withStyles_1 = __importDefault(withStyles_1);
    exports.ThemeProvider = ThemeProvider_1.default;
    exports.withStyles = withStyles_1.default;
});
