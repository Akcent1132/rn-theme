import * as React from "react";
import PropTypes from "prop-types";
import { ViewStyle, TextStyle } from "react-native";
export declare type ThemeBase<S, C extends string = string, F extends string = string, Sh extends string = string> = {
    colors: Record<C, string>;
    styles: S;
    fonts: Record<F, TextStyle>;
    shadows: Record<Sh, ViewStyle>;
};
export declare type Themes<S = {}, C extends string = string, F extends string = string, Sh extends string = string> = {
    [x: string]: ThemeBase<S, C, F, Sh>;
};
export declare type ThemeProviderProps = {
    children: React.ReactChild;
    themes: Themes;
};
declare class ThemeProvider extends React.PureComponent<ThemeProviderProps, {}> {
    static childContextTypes: {
        getTheme: PropTypes.Requireable<(...args: any[]) => any>;
    };
    getChildContext(): {
        getTheme: (name: string) => ThemeBase<{}, string, string, string>;
    };
    render(): string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | (string & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (number & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (false & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (true & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (string & {}) | (number & {}) | (React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> & string) | (React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> & number) | (React.ReactNodeArray & string) | (React.ReactNodeArray & number) | (React.ReactNodeArray & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (React.ReactPortal & string) | (React.ReactPortal & number) | (React.ReactPortal & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>);
}
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map