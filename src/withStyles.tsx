import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { StyleSheet } from "react-native";
import { ThemeBase } from ".";

export declare type WithStyles<Styles, Theme> = {
    styles: Styles,
    theme: Theme
}


const contextTypes = {
    getTheme: PropTypes.func
};

const withStyles = function <Styles, Theme extends ThemeBase<{}>>(stylesCallback: (theme: Theme, ownProps: any)=>Styles, themeName: (props: any)=>string = ()=>'default') {
    return function<OwnProps>(WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>): React.ComponentType<OwnProps> {
        class Wrapper extends React.PureComponent<OwnProps, {}>{
            static contextTypes = contextTypes;

            render() {
                const name = themeName(this.props);
                const theme: Theme = this.context.getTheme(name);
                const styles:any = StyleSheet.create<Styles>({ 
                    ...stylesCallback(theme, this.props) as any,
                })
                return (
                    <WrappedComponent
                        {...this.props}
                        styles={styles}
                        theme={theme}
                    />
                )
            }
        }

        return hoistNonReactStatics(Wrapper, WrappedComponent as any);
    }
}
export default withStyles