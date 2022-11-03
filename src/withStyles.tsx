import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { ThemeBase } from "./types";
import useTheme from "./useTheme";
import { ThemeSwitcherContext } from "./context";


export declare type WithStyles<Styles, Theme> = {
    styles: Styles,
    theme: Theme
}


const withStyles = function <Styles, Theme extends ThemeBase<{}>>(stylesCallback: (theme: Theme, ownProps: any) => Styles, themeName?: (props: any) => string) {
    return function <OwnProps>(WrappedComponent: React.ComponentType<OwnProps & WithStyles<Styles, Theme>>): React.ComponentType<OwnProps> {


        const Wrapper: React.FC<OwnProps> = (props) => {
            const switcher = React.useContext(ThemeSwitcherContext);
            const ownThemeName = themeName ? themeName(props) : undefined;
            const [styles, theme] = useTheme(stylesCallback, props, ownThemeName || switcher.themeName || 'default')
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