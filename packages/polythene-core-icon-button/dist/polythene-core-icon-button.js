!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],o):o(e.polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,o,t){"use strict";function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var c={component:"pe-button pe-icon-button",content:"pe-icon-button__content",compact:"pe-icon-button--compact"},a=(t.vars.grid_unit_icon_button-t.vars.unit_icon_size)/2,i=(t.vars.grid_unit_icon_button-t.vars.unit_icon_size)/3,l=o.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),_=o.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),u={padding:a,padding_compact:i,color_background:"transparent",color_light:l,color_light_disabled:o.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_wash:l,color_light_wash_opacity:t.vars.blend_light_background_hover_medium,color_light_focus_opacity:t.vars.blend_light_background_hover_medium,color_dark:_,color_dark_disabled:o.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_wash:_,color_dark_wash_opacity:t.vars.blend_dark_background_hover_medium,color_dark_focus_opacity:t.vars.blend_dark_background_hover_medium},d=function(e,o){return[n({},e,{display:"inline-block","vertical-align":"middle",cursor:"pointer",position:"relative","font-size":"1rem","border-radius":"50%",border:"none"," .pe-icon-button__content":{"line-height":1,padding:o.padding+"px"},".pe-icon-button--compact":{" .pe-icon-button__content":{padding:o.padding_compact+"px"}}})]},s=function(e,o,t,n){return[r({},e.map(function(e){return e+o}).join(","),{color:t["color_"+n],backgroundColor:t["color_"+n+"_background"]||t.color_background," .pe-button__wash":{opacity:t["color_"+n+"_wash_opacity"]},".pe-button--focus, &.pe-button--selected":{" .pe-button__focus":{opacity:t["color_"+n+"_focus_opacity"],backgroundColor:"currentcolor"}},".pe-button--disabled":{color:t["color_"+n+"_disabled"]}})]},p=function(e,o,t,n){return[r({},e.map(function(e){return e+o+":hover"}).join(","),{" .pe-button__wash":{backgroundColor:t["color_"+n+"_wash"]}})]},b=function(e,o){return[s([".pe-dark-tone",".pe-dark-tone "],e,o,"dark"),s(["",".pe-light-tone",".pe-light-tone "],e,o,"light"),p(["html.pe-no-touch .pe-dark-tone "],e,o,"dark"),p(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],e,o,"light")]},h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g=[d,b],f="."+c.component.replace(/ /g,"."),m=function(e,t){return o.styler.generateStyles([e,f],h({},u,t),g)};o.styler.generateStyles([f],u,g);var v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y=m,k=function(e,o){var t=o.renderer,n=o.Icon,r=e.attrs,a=r.content?r.content:r.icon?t(n,r.icon):r.children||e.children;return v({},{content:t("div",{className:c.content},a),parentClassName:[r.parentClassName||c.component,r.compact?c.compact:null].join(" "),wash:!1,animateOnTap:!1},r)},w=function(){return null},j=Object.freeze({theme:y,createProps:k,createContent:w});e.coreIconButton=j,e.classes=c,e.vars=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-icon-button.js.map