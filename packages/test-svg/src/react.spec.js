import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import reactTests from "./tests-react.js";

// import { renderer, SVG } from "polythene-react";
// import specTests from "./spec-tests.js";

// runSnapshots({
//   tests: specTests({ SVG, renderer }).concat(reactTests),
//   renderer
// });

console.log("Skipping spec tests for React SVG"); // eslint-disable-line no-console

import { renderer } from "polythene-react";

runSnapshots({
  tests: reactTests,
  renderer
});