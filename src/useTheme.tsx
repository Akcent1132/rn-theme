import * as React from "react";
import { ThemeContext } from "./context";
import { StyleSheet } from "react-native";
import { ThemeBase } from "./types";

const useTheme = function <Styles, Theme extends ThemeBase<{}>, Props extends object = any>(stylesCallback: (theme: Theme, ownProps: Props) => Styles, props: Props = {} as Props, themeName: string = 'default'): [Styles, Theme] {

    const themes = React.useContext(ThemeContext);

    const theme: Theme = themes[themeName] as any;
    const styles: any = StyleSheet.create<Styles>({
        ...stylesCallback(theme, props),
    })

    return [styles, theme]
}

export default useTheme