!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mithril"),require("polythene-raised-button"),require("polythene-icon"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-raised-button","polythene-icon","polythene-css","polythene-theme"],n):n(e.polythene=e.polythene||{},e.m,e["polythene-raised-button"],e["polythene-icon"],e["polythene-css"],e["polythene-theme"])}(this,function(e,n,r,t,i,o){"use strict";n="default"in n?n.default:n;var a=o.vars.rgba,s={size_regular:7*o.vars.grid_unit_component,size_mini:5*o.vars.grid_unit_component,padding_regular:2*o.vars.grid_unit_component,color_light:a(o.vars.color_primary_foreground),color_dark:a(o.vars.color_primary_foreground),color_light_background:a(o.vars.color_primary),color_dark_background:a(o.vars.color_primary)},c=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e},p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l=function(e,n){return[c({},e,[i.mixin.vendorize({"user-select":"none"},o.vars.prefixes_user_select),{display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",width:n.size_regular+"px",height:n.size_regular+"px",borderRadius:"50%",padding:n.padding_regular+"px"},".pe-fab--mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-o.vars.unit_icon_size)/2+"px"}}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":[i.mixin.vendorize({transition:"background-color "+o.vars.animation_duration+" ease-in-out"},o.vars.prefixes_transition),{borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}]}])]},u=function(e,n,r,t){return[c({},e+n,{" .pe-button__content":{backgroundColor:r["color_"+t+"_background"],color:r["color_"+t]}})]},d=function(e,n){return[u("",e,n,"light"),u(".pe-dark-theme ",e,n,"dark")]},_=[l,d],h=".pe-fab",m=function(e,n){return i.styler.generateStyles([e,h],p({},s,n),_)};i.styler.generateStyles([h],s,_);var f={component:"pe-fab",content:"pe-fab__content",mini:"pe-fab--mini"},b=function(e){var i=e.attrs,o=i.content?i.content:i.icon?n(t.icon,i.icon):i.children||e.children;return n(r.raisedButton,p({},{content:n("div",{class:f.content},o),parentClass:[f.component,i.mini?f.mini:null].join(" "),ripple:{center:!0,opacityDecayVelocity:.24},shadow:{increase:5},ink:!0,wash:!0,animateOnTap:void 0===i.animateOnTap||i.animateOnTap},i))},y={theme:m,view:b};e.fab=y,e.classes=f,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-fab.js.map
