import * as React from "react";
import PropTypes from "prop-types"
import { ViewStyle, TextStyle, StyleSheet } from "react-native";


export type ThemeBase<S, C extends string = string, F extends string = string, Sh extends string = string> = {
    colors: Record<C, string>,
    styles: S,//StyleSheet.NamedStyles<S>,
    fonts:  Record<F, TextStyle>
    shadows: Record<Sh, ViewStyle>
}

export type Themes<S={}, C extends string = string, F extends string = string, Sh extends string = string> = {
    [x: string]:ThemeBase<S, C, F, Sh>
}

export type ThemeProviderProps = {
    children: React.ReactChild,
    themes: Themes
}

class ThemeProvider extends React.PureComponent<ThemeProviderProps,{}>{
    static childContextTypes = {
        getTheme: PropTypes.func
    };

    getChildContext() {
        return {
            getTheme: (name: string) => {
                return this.props.themes[name]
            }
        };
    }
    render(){
        return this.props.children
    }
}   

export default ThemeProvider