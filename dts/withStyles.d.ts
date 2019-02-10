import React from "react";
import { ThemeBase } from ".";
export declare type WithStyles<Styles, Theme> = {
    styles: Styles;
    theme: Theme;
};
declare const withStyles: <Styles, Theme extends ThemeBase<{}, string, string, string>>(stylesCallback: <OwnProps>(theme: Theme, ownProps: OwnProps) => Styles, themeName?: <OwnProps>(props: OwnProps) => string) => <T>(WrappedComponent: React.ComponentType<T & WithStyles<Styles, Theme>>) => React.ComponentType<T>;
export default withStyles;
//# sourceMappingURL=withStyles.d.ts.map