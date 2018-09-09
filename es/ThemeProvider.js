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
import * as React from "react";
import PropTypes from "prop-types";
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
        getTheme: PropTypes.func
    };
    return ThemeProvider;
}(React.PureComponent));
export default ThemeProvider;
