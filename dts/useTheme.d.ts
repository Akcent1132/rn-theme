import { ThemeBase } from "./types";
declare const useTheme: <Styles, Theme extends ThemeBase<{}, string, string, string>, Props extends object = any>(stylesCallback: (theme: Theme, ownProps: Props) => Styles, props?: Props, themeName?: string | undefined) => [Styles, Theme];
export default useTheme;
//# sourceMappingURL=useTheme.d.ts.map