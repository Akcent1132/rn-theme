import * as React from "react";
import { ThemeContext, ThemeSwitcherContext } from "./context";
import { ThemeBase } from "./types";

const useTheme = function <Styles, Theme extends ThemeBase<{}>, Props extends object = any>(stylesCallback: (theme: Theme, ownProps: Props) => Styles, props: Props = {} as Props, themeName?:string): [Styles, Theme] {

    const themes = React.useContext(ThemeContext);

    const switcher = React.useContext(ThemeSwitcherContext);

    const theme: Theme = themes[themeName || switcher.themeName] as any;

    const _style = stylesCallback(theme, props);
    
    const styles: any = React.useMemo(()=>{
        return _style
    },[JSON.stringify(_style)]);

    return [styles, theme]
}

export default useTheme