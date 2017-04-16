!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-selection-control"),require("polythene-shadow"),require("polythene-icon-button"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-selection-control","polythene-shadow","polythene-icon-button","polythene-css","polythene-theme"],t):t(o.polythene=o.polythene||{},o.m,o["polythene-selection-control"],o["polythene-shadow"],o["polythene-icon-button"],o["polythene-css"],o["polythene-theme"])}(this,function(o,t,r,e,n,c,l){"use strict";function i(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function a(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}t="default"in t?t.default:t,e="default"in e?e.default:e;var _="default"in n?n.default:n,s=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},u={track:"pe-switch-control__track",thumb:"pe-switch-control__thumb",knob:"pe-switch-control__knob"},p=function(o,r){var n=void 0!==r.zOff?r.zOff:1,c=void 0!==r.zOn?r.zOn:2,l=o?c:n,i=!r.disabled&&(void 0===r.raised||r.raised);return[t("div",{class:u.track}),t(_,s({},{class:u.thumb,content:[t("div",{class:u.knob},[r.icon?r.icon:null,i?t(e,{z:l,animated:!0}):null])],style:r.style,disabled:r.disabled,events:r.events,ink:r.ink||!1},void 0!==r.selectable?{inactive:!r.selectable(o)}:null,r.iconButton))]},h=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},d=l.vars.rgba,f=(l.vars.grid_unit_icon_button-l.vars.unit_icon_size)/2,b=h({},r.vars,{track_height:14,track_length:36,thumb_size:20,padding:l.vars.grid_unit_component,icon_button_padding:n.vars.padding,hit_area_padding:f,animation_duration:l.vars.animation_duration,color_light_thumb_on:d(l.vars.color_primary),color_light_thumb_off:"#f1f1f1",color_light_thumb_disabled:"#bdbdbd",color_light_wash_on:d(l.vars.color_primary),color_light_wash_off:n.vars.color_light_wash,color_light_track_on:d(l.vars.color_primary_faded),color_light_track_on_opacity:.55,color_light_track_off:d(l.vars.color_light_foreground,l.vars.blend_light_text_regular),color_light_track_off_opacity:.55,color_light_track_disabled:d(l.vars.color_light_foreground,l.vars.blend_light_background_disabled),color_light_track_disabled_opacity:1,color_dark_thumb_on:d(l.vars.color_primary),color_dark_thumb_off:"#bdbdbd",color_dark_thumb_disabled:"#555",color_dark_wash_on:d(l.vars.color_primary),color_dark_wash_off:n.vars.color_dark_wash,color_dark_track_on:d(l.vars.color_primary_faded,l.vars.blend_dark_text_tertiary),color_dark_track_on_opacity:9,color_dark_track_off:"#717171",color_dark_track_off_opacity:.55,color_dark_track_disabled:"#717171",color_dark_track_disabled_opacity:.3}),g=function(o,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.animation_duration;return[c.mixin.defaultTransition(t,r,"ease-out")]},k=function(o,t){var r=t/l.vars.unit_icon_size,e=2*Math.floor(.5*o.thumb_size*r),n=2*Math.floor(.5*o.track_height*r),c=2*Math.floor(.5*o.track_length*r),i=2*Math.floor(.5*o.thumb_size*r),a=(o.label_height*r-n)/2,_=o.icon_button_padding,s=(t-i)/2,u=t+2*_,p=e/2-u/2,h=p+c-e,d=p+s;return{" .pe-control__form-label":{height:t+"px",minWidth:c+"px"}," .pe-control__label":{paddingLeft:o.padding*r+8+c+"px"}," .pe-switch-control__track":{left:"0.3px",height:n+"px",width:c-.6+"px",top:a+"px",borderRadius:n+"px"}," .pe-switch-control__thumb":{top:d+"px",left:p+"px"}," .pe-switch-control__knob":{width:i+"px",height:i+"px",margin:s+"px"}," .pe-button__content":{padding:_+"px"},".pe-control--on":{" .pe-switch-control__thumb":{left:h+"px"}}}},y=function(o,t){return r.layout(o,t,"checkbox").concat([i({},o,{" .pe-switch-control__track":[g(t,"background, opacity"),{position:"absolute",left:0}]," .pe-switch-control__thumb":[g(t,"left, color"),{position:"absolute",zIndex:1,color:"inherit",":focus":{outline:0}}]," .pe-switch-control__knob":{position:"relative",borderRadius:"50%"}," .pe-button__content .pe-switch-control__knob .pe-icon":[c.mixin.fit(),g(t,"color"),{width:"100%",height:"100%"}]," .pe-button__focus":[g(t,"all")],".pe-control--small":k(t,l.vars.unit_icon_size_small),".pe-control--regular":k(t,l.vars.unit_icon_size),".pe-control--medium":k(t,l.vars.unit_icon_size_medium),".pe-control--large":k(t,l.vars.unit_icon_size_large)})])},m=function(o,t,r,e){return[a({},o.map(function(o){return o+t}).join(","),{".pe-control--off":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_off_opacity"],backgroundColor:r["color_"+e+"_track_off"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_off"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+e+"_focus_off_opacity"],backgroundColor:r["color_"+e+"_focus_off"]}}," .pe-icon":{color:r["color_"+e+"_icon_off"]||"currentcolor"}},".pe-control--on":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_on_opacity"],backgroundColor:r["color_"+e+"_track_on"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_on"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+e+"_focus_on_opacity"],backgroundColor:r["color_"+e+"_focus_on"]}}," .pe-icon":{color:r["color_"+e+"_icon_on"]||"currentcolor"}},".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_disabled_opacity"],backgroundColor:r["color_"+e+"_track_disabled"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_disabled"]}}})]},v=function(o,t,r,e){return[a({},o.map(function(o){return o+t+":hover"}).join(","),{".pe-control--on":{" .pe-button__wash":{backgroundColor:r["color_"+e+"_wash_on"]}},".pe-control--off":{" .pe-button__wash":{backgroundColor:r["color_"+e+"_wash_off"]}}})]},w=function(o,t){return[m([".pe-dark-tone",".pe-dark-tone "],o,t,"dark"),m(["",".pe-light-tone",".pe-light-tone "],o,t,"light"),v(["html.pe-no-touch .pe-dark-tone "],o,t,"dark"),v(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],o,t,"light")]},x=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},O=[y,w],z=".pe-control.pe-switch-control",j=function(o,t){return c.styler.generateStyles([o,z],x({},b,t),O)};c.styler.generateStyles([z],b,O);var C=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},P={component:"pe-switch-control"},q=function(o){return t(r.selectionControl,C({},o.attrs,{controlView:p,selectable:o.attrs.selectable||function(){return!0},instanceClass:P.component,type:"checkbox"}))},M={theme:j,view:q};o.default=M,o.classes=P,o.controlView=p,o.controlViewClasses=u,o.vars=b,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-switch-button.js.map
