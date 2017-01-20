import { styler } from "polythene-css";
import vars from "./vars";
import color from "./color";

const fns = [color];
const selector = ".pe-button.pe-text-button.pe-raised-button";

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);

