import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { ThemeBase } from "./types";
import useTheme from "./useTheme";


export declare type WithStyles<Styles, Theme> = {
    styles: Styles,
    theme: Theme
}


const withStyles = function <Styles, Theme extends ThemeBase<{}>>(stylesCallback: (theme: Theme, ownProps: any) => Styles, themeName: (props: any) => string = () => 'default') {
    return function <OwnProps>(WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>): React.ComponentType<OwnProps> {


        const Wrapper: React.FC<OwnProps> = (props) => {
            const [styles, theme] = useTheme(stylesCallback, props, themeName(props))
            return (
                <WrappedComponent
                    {...props}
                    styles={styles}
                    theme={theme}
                />
            )
        }

        return hoistNonReactStatics(Wrapper, WrappedComponent as any);
    }
}
export default withStyles