import React from "react";
import { ThemeBase } from ".";
export declare type WithStyles<Styles, Theme> = {
    styles: Styles;
    theme: Theme;
};
declare const withStyles: <OwnProps, Styles, Theme extends ThemeBase<{}, string, string, string>>(stylesCallback: (theme: Theme, ownProps: OwnProps) => Styles, themeName?: (props: OwnProps) => string) => (WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>) => React.ComponentType<OwnProps>;
export default withStyles;
//# sourceMappingURL=withStyles.d.ts.map