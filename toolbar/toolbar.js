"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril);require("polythene/toolbar/theme/theme");var CSS_CLASSES={block:"pe-toolbar",bar:"pe-toolbar__bar",topBar:"pe-toolbar__bar--top",middleBar:"pe-toolbar__bar--middle",bottomBar:"pe-toolbar__bar--bottom",animated:"pe-header--animated",mediumTall:"pe-header--medium-tall",tall:"pe-header--tall"},barWrapper=function(className,content){return(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.bar,className].join(" ")},content)},bar=function(){var opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],bars=[];return opts.content?bars.push(barWrapper(CSS_CLASSES.topBar,opts.content)):(opts.topBar&&bars.push(barWrapper(CSS_CLASSES.topBar,opts.topBar)),opts.middleBar&&bars.push(barWrapper(CSS_CLASSES.middleBar,opts.middleBar)),opts.bottomBar&&bars.push(barWrapper(CSS_CLASSES.bottomBar,opts.bottomBar))),bars},modeClasses={"medium-tall":CSS_CLASSES.mediumTall,tall:CSS_CLASSES.tall},classForMode=function(){var mode=arguments.length<=0||void 0===arguments[0]?"standard":arguments[0];return"standard"===mode?"":modeClasses[mode]},createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],tag=opts.tag||"div",props={"class":[CSS_CLASSES.block,CSS_CLASSES.animated,classForMode(opts.mode),opts["class"]].join(" "),id:opts.id||"",config:opts.config},content=bar(opts);return(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])},component={view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=toolbar.js.map