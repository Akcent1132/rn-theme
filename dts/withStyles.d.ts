import React from "react";
import { ThemeBase } from ".";
export declare type WithStyles<Styles, Theme> = {
    styles: Styles;
    theme: Theme;
};
declare const withStyles: <Styles, Theme extends ThemeBase<{}, string, string, string>>(stylesCallback: (theme: Theme) => Styles, themeName?: (props: any) => string) => <T>(WrappedComponent: React.ComponentType<T & WithStyles<Styles, Theme>>) => React.ComponentType<T>;
export default withStyles;
//# sourceMappingURL=withStyles.d.ts.map