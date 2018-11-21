import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { StyleSheet } from "react-native";
import { ThemeBase } from ".";

export declare type WithStyles<Styles, Theme> = {
    styles: Styles & Theme
}

const contextTypes = {
    getTheme: PropTypes.func
};

const withStyles = function <Styles, Theme extends ThemeBase<any>>(stylesCallback: (theme: Theme)=>Styles, themeName: (props: any)=>string = ()=>'default') {
    return function <T>(WrappedComponent: React.ComponentType<T & WithStyles<Styles, Theme>>): React.ComponentType<T> {
        class Wrapper extends React.PureComponent<T, {}>{
            static contextTypes = contextTypes;

            render() {
                const theme: Theme = this.context.getTheme(themeName(this.props));
                const styles:any = StyleSheet.create<Styles>({
                    ...theme.styles as any, 
                    ...stylesCallback(theme) as any,
                })
                return (
                    <WrappedComponent
                        {...this.props}
                        styles={styles as Styles & Theme}
                    />
                )
            }
        }

        return hoistNonReactStatics(Wrapper, WrappedComponent as any);
    }
}
export default withStyles