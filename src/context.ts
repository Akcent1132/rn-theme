import * as React from "react";
import { Themes } from "./types";

export const ThemeContext = React.createContext<Themes<{}>>({});