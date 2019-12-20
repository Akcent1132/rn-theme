import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
import { StyleSheet } from "react-native";
import { ThemeBase } from "./types";

const useTheme = function <Styles, Theme extends ThemeBase<{}>, Props extends object = any>(stylesCallback: (theme: Theme, ownProps: Props) => Styles, props: Props = {} as Props, themeName?:string): [Styles, Theme] {

    const themes = React.useContext(ThemeContext);

    const switcher = React.useContext(ThemeSwitcherContext);

    const theme: Theme = themes[themeName || switcher.themeName] as any;
    const styles: any = StyleSheet.create<Styles>({
        ...stylesCallback(theme, props),
    })

    return [styles, theme]
}

export default useTheme