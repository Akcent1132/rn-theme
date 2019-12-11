import { TextStyle, ViewStyle } from "react-native"

export type ThemeBase<S, C extends string = string, F extends string = string, Sh extends string = string> = {
    name: string,
    colors: Record<C, string>,
    styles: S,//StyleSheet.NamedStyles<S>,
    fonts:  Record<F, TextStyle>
    shadows: Record<Sh, ViewStyle>
}

export type Themes<S={}, C extends string = string, F extends string = string, Sh extends string = string> = {
    [x: string]:ThemeBase<S, C, F, Sh>
}