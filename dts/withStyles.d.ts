import React from "react";
import { StyleSheet } from "react-native";
import { ThemeBase } from ".";
export declare type WithStyles<Styles> = {
    styles: StyleSheet.NamedStyles<Styles>;
};
declare const withStyles: <Styles, Theme extends ThemeBase<any, string, string, string>>(stylesCallback: (theme: Theme) => Styles, themeName?: (props: any) => string) => <T>(WrappedComponent: React.ComponentType<T & WithStyles<Styles>>) => React.ComponentType<T>;
export default withStyles;
//# sourceMappingURL=withStyles.d.ts.map