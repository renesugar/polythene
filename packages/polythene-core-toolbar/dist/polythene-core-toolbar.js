!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,r){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={component:"pe-toolbar",compact:"pe-toolbar--compact",title:"pe-toolbar__title",centeredTitle:"pe-toolbar__title--center",indentedTitle:"pe-toolbar__title--indent"},a=2*r.vars.grid_unit_component-12,c=9*r.vars.grid_unit_component-6*r.vars.grid_unit_component-a,p=7*r.vars.grid_unit_component,s={padding_side:a,height:8*r.vars.grid_unit_component,height_compact:p,title_padding:c,indent:r.vars.unit_indent,transition_duration:r.vars.animation_duration,font_size:18,line_height:r.vars.line_height,color_light_text:n.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_dark_text:n.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary)},u=function(e,t){return[o({},e,[n.flex.layout,n.flex.layoutHorizontal,n.flex.layoutCenter,{height:t.height+"px",fontSize:t.font_size+"px",lineHeight:t.line_height+"em",padding:"0 "+t.padding_side+"px",".pe-toolbar--compact":{height:t.height_compact+"px"}," > span, .pe-toolbar__title, .pe-toolbar__title--indent":[n.flex.layout,n.flex.flex(1),n.mixin.ellipsis(1,r.vars.line_height,"em"),{transformOrigin:"left 50%",lineHeight:r.vars.line_height+"em",wordBreak:"break-all"}]," > span, .pe-toolbar__title":{marginLeft:t.title_padding+"px"}," .pe-toolbar__title--indent":{marginLeft:t.indent-t.padding_side+"px"}," .pe-toolbar__title--center":{textAlign:"center",marginLeft:t.title_padding+"px",marginRight:t.title_padding+"px"}," .pe-fit":[n.mixin.fit(),{margin:0}]}])]},d=function(e,t,n,r){return[i({},e.map(function(e){return e+t}).join(","),{color:n["color_"+r+"_text"],backgroundColor:n["color_"+r+"_background"]})]},_=function(e,t){return[d([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),d(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=[u,_],f="."+l.component,m=function(e,t){return n.styler.generateStyles([e,f],g({},s,t),h)};n.styler.generateStyles([f],s,h);var b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(e){return e.attrs.element||"div"},y=m,x=function(e,n){var r=n.keys,o=e.attrs;return b({},t.filterSupportedAttributes(o),{className:[l.component,o.compact?l.compact:null,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[r.class]].join(" ")},o.events)},k=function(e){var t=e.attrs;return t.content?t.content:t.children||e.children||t},j=Object.freeze({getElement:v,theme:y,createProps:x,createContent:k}),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=function(e){return e.attrs.element||"div"},T=function(e,n){var r=n.keys,o=e.attrs;return O({},t.filterSupportedAttributes(o),{className:[l.title,o.indent?l.indentedTitle:null,o.center?l.centeredTitle:null,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[r.class]].join(" ")},o.events)},w=function(e){var t=e.attrs;return t.text?t.text:t.content?t.content:t.children||e.children||t},z=Object.freeze({getElement:P,createProps:T,createContent:w});e.coreToolbar=j,e.coreToolbarTitle=z,e.classes=l,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-toolbar.js.map
