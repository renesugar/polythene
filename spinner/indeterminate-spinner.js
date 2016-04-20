"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_spinner=require("polythene/spinner/spinner"),_spinner2=_interopRequireDefault(_spinner);require("polythene/spinner/theme/indeterminate/theme");var CSS_CLASSES={block:"pe-spinner-indeterminate",animation:"pe-spinner-indeterminate__animation",layer:"pe-spinner-indeterminate__layer",layerN:"pe-spinner-indeterminate__layer--",gapPatch:"pe-spinner-indeterminate__gap-patch",circle:"pe-spinner-indeterminate__circle",circleClipper:"pe-spinner-indeterminate__circle-clipper",circleClipperLeft:"pe-spinner-indeterminate__circle-clipper--left",circleClipperRight:"pe-spinner-indeterminate__circle-clipper--right"},layer=function(num){return(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.layer,CSS_CLASSES.layerN+num].join(" ")},[(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.circleClipper,CSS_CLASSES.circleClipperLeft].join(" ")},(0,_mithril2["default"])("div",{"class":CSS_CLASSES.circle})),(0,_mithril2["default"])("div",{"class":CSS_CLASSES.gapPatch},(0,_mithril2["default"])("div",{"class":CSS_CLASSES.circle})),(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.circleClipper,CSS_CLASSES.circleClipperRight].join(" ")},(0,_mithril2["default"])("div",{"class":CSS_CLASSES.circle}))])},component={view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return opts.content=(0,_mithril2["default"])("div",{"class":CSS_CLASSES.animation},[1,2,3,4].map(function(num){return layer(num)})),opts["class"]=[CSS_CLASSES.block,opts["class"]].join(" "),_mithril2["default"].component(_spinner2["default"],opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=indeterminate-spinner.js.map