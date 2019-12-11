import React from "react";

import { StyleSheet } from "react-native";
import { ThemeBase } from "./types"
import { ThemeContext } from "./context";
import hoistNonReactStatics from "hoist-non-react-statics";

export declare type WithStyles<Styles, Theme> = {
    styles: Styles,
    theme: Theme
}


const withStyles = function <Styles, Theme extends ThemeBase<{}>>(stylesCallback: (theme: Theme, ownProps: any) => Styles, themeName: (props: any) => string = () => 'default') {
    return function <OwnProps>(WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>): React.ComponentType<OwnProps> {
        class Wrapper extends React.PureComponent<OwnProps, {}>{


            render() {

                return (
                    <ThemeContext.Consumer>
                        {
                            (themes) => {
                                const name = themeName(this.props);
                                const theme: Theme = themes[name] as any;
                                const styles: any = StyleSheet.create<Styles>({
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
                    </ThemeContext.Consumer>

                )
            }
        }

        return hoistNonReactStatics(Wrapper, WrappedComponent as any);
    }
}
export default withStyles