import { color } from "polythene-css-notification";

export default (selector, componentVars, customVars) => color(selector, componentVars, customVars);

// const sel = (selector, o) => ({
//   [selector]: o
// });

// const generalFns = ({
//   general_styles: selector => [], // eslint-disable-line no-unused-vars
// });

// const tintFns = tint => ({
//   ["color_" + tint + "_text"]: (selector, vars) => [
//     sel(selector, {
//       " .pe-notification__content": {
//         color: vars["color_" + tint + "_text"],
//       }
//     })
//   ],
//   ["color_" + tint + "_background"]: (selector, vars) => [
//     sel(selector, {
//       " .pe-notification__content": {
//         background: vars["color_" + tint + "_background"]
//       }
//     })
//   ]
// });

// const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
// const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

// const createStyle = (selector, componentVars, customVars, tint) => {
//   const allVars = {...componentVars, ...customVars};
//   const currentVars = customVars
//     ? customVars
//     : allVars;
//   return Object.keys(currentVars).map(v => {
//     const varFns = tint === "light"
//       ? lightTintFns
//       : darkTintFns;
//     return varFns[v] !== undefined 
//       ? varFns[v](selector, allVars)
//       : null;
//   }).filter(s => s);
// };

// const style = (scopes, selector, componentVars, customVars, tint) => {
//   const selectors = scopes.map(s => s + selector).join(",");
//   return createStyle(selectors, componentVars, customVars, tint);
// };

// export default (selector, componentVars, customVars) => [
//   style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
//   style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
// ];
