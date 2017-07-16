/*
Build to an Universal Module Definition
*/
const path = require("path");
import { pkg, createConfig } from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!parseInt(env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html
const moduleName = env.MODULE_NAME || "polythene";

const baseConfig = createConfig({ includeDepencies, lint: true });
const targetConfig = Object.assign({}, baseConfig, {
  dest: env.DEST || pkg.main,
  format: "umd",
  sourceMap: true,
  moduleName,
});

targetConfig.plugins.push(uglify());

export default targetConfig;