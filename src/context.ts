import * as React from "react";
import { Themes } from "./types";

export const ThemeContext = React.createContext<Themes<{}>>({});


export const ThemeSwitcherContext = React.createContext<{themeName: string}>({themeName: "default"});