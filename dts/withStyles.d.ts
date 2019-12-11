import React from "react";
import { ThemeBase } from "./types";
export declare type WithStyles<Styles, Theme> = {
    styles: Styles;
    theme: Theme;
};
declare const withStyles: <Styles, Theme extends ThemeBase<{}, string, string, string>>(stylesCallback: (theme: Theme, ownProps: any) => Styles, themeName?: (props: any) => string) => <OwnProps>(WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>) => React.ComponentType<OwnProps>;
export default withStyles;
//# sourceMappingURL=withStyles.d.ts.map