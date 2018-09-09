"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeProvider.prototype.getChildContext = function () {
        var _this = this;
        return {
            getTheme: function (name) {
                return _this.props.themes[name];
            }
        };
    };
    ThemeProvider.prototype.render = function () {
        return this.props.children;
    };
    ThemeProvider.childContextTypes = {
        getTheme: prop_types_1.default.func
    };
    return ThemeProvider;
}(React.PureComponent));
exports.default = ThemeProvider;
