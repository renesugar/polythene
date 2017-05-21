!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-core-list-tile"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-core-list-tile","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-core-list-tile"],e["polythene-theme"])}(this,function(e,t,n,i,r){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={component:"pe-menu",content:"pe-menu__content",placeholder:"pe-menu__placeholder",target:"pe-menu__target",permanent:"pe-menu--permanent",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",listTile:i.CoreListTile.classes.component,selectedListTile:i.CoreListTile.classes.selected},l=r.vars.rgba,c={sizes:[1,1.5,2,3,4,5,6,7],min_size:1.5,max_size_small_screen:5,size_factor:r.vars.grid_unit_menu,border_radius:r.vars.unit_block_border_radius,color_light_background:l(r.vars.color_light_background),color_dark_background:l(r.vars.color_dark_background)},d=function(e,t){return t<e.min_size?e.min_size:t},p=function(e){return"pe-menu--width-"+e.toString().replace(".","-")},f=function(e,t){var n=d(e,t);return o({},"&."+p(n),{width:e.size_factor*n+"px","max-width":"100%"})},m=function(e,t){var i;return[(i={},o(i,e,[t.sizes.map(function(e){return f(t,e)}),o({transitionTimingFunction:"ease-out",transitionProperty:"opacity",zIndex:r.vars.z_menu,opacity:0,position:"absolute",width:"100%",minWidth:r.vars.grid_unit_menu*t.min_size+"px","&.pe-menu--width-auto":{width:"auto"},"&.pe-menu--visible":{opacity:1},"&.pe-menu--permanent":{position:"relative",opacity:1,zIndex:0}},"@media (max-width: "+r.vars.unit_screen_size_large+"px)",{"max-width":t.max_size_small_screen*r.vars.grid_unit_menu+"px"})]),o(i," .pe-menu__content",{" .pe-list-tile__title":[n.mixin.ellipsis("none")]}),i)]},h=function(e,t,n,i){return[u({},e.map(function(e){return e+t}).join(","),{" .pe-menu__content":{"background-color":n["color_"+i+"_background"]}})]},g=function(e,t){return[h([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),h(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v=[m,g],_="."+a.component,y=function(e,t){return n.styler.generateStyles([e,_],b({},c,t),v)};n.styler.generateStyles([_],c,v);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},k=function(e,t){if(!t.target)throw"Menu: no target";var n=document.querySelector(t.target);if(n){var i=void 0!==t.offset?t.offset:16,r=e.dom;if(r){var o=e.dom.querySelector("."+a.content),u=t.origin||"top-left",s=0;if(!1!==t.reposition){var l=o.querySelectorAll("."+a.listTile)[0],c=o.querySelector("."+a.selectedListTile);if(l&&c){var d=l.getBoundingClientRect(),p=c.getBoundingClientRect();s=p.top-d.top}var f=(c||l).getBoundingClientRect(),m=n.getBoundingClientRect(),h=f.height-m.height;s+=h/2}var g=n.getBoundingClientRect();if(r.parentNode){var b=r.parentNode.getBoundingClientRect(),v=function(){return r.style.left=g.left-b.left+i+"px"},_=function(){return r.style.right=g.right-b.right+i+"px"},y=function(){return r.style.top=g.top-b.top-s-8+"px"},w=function(){return r.style.bottom=g.bottom-b.bottom-s+"px"};({"top-left":function(){return y()&&v()},"top-right":function(){return y()&&_()},"bottom-left":function(){return w()&&v()},"bottom-right":function(){return w()&&_()}})[u].call()}}}},z=function(e,n){return n.updates.setTransitioning(!0),t.show(w({},n,{el:e.dom,showClass:a.visible})).then(function(){n.updates.setTransitioning(!1),n.updates.setVisible(!0),n.didShow&&n.didShow(n.id)})},x=function(e,n){return n.updates.setTransitioning(!0),t.hide(w({},n,{el:e.dom,showClass:a.visible})).then(function(){n.updates.setTransitioning(!1),n.updates.setVisible(!1),n.didHide&&n.didHide(n.id)})},S=function(e){return e<1.5?1.5:e},T=function(e){return a.width_n+e.toString().replace(".","-")},C=function(e,n){var i=e.state,r=e.attrs,o=function(){k(i,r)},u=function(e){e.target!==i.dom&&(l(),e.defaultPrevented?x(i,r):x(i,w({},r,{hideDelay:0})))},s=document.body,a=function(){s.addEventListener("click",u)},l=function(){s.removeEventListener("click",u)},c=function(e){27===e.which&&x(i,w({},r,{hideDelay:0}))};"mount"===n?(t.subscribe("resize",o),t.subscribe("keydown",c),setTimeout(function(){a(),z(i,r)},0)):"unmount"===n&&(t.unsubscribe("resize",o),t.unsubscribe("keydown",c),l())},j={theme:y,element:"div",classes:a,vars:c,createProps:function(e,n){var i=n.keys,r=e.attrs;return w({},t.filterSupportedAttributes(r),{className:[a.component,r.permanent?a.permanent:null,r.target?a.target:null,r.size?T(S(r.size)):null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[i.class]].join(" ")})},createContent:function(e,t){var n,i=t.renderer,r=t.keys,o=t.Shadow,u=e.attrs,l=void 0!==u.z?u.z:1;return i("div",(n={className:a.content},s(n,r.onclick,function(e){return e.preventDefault()}),s(n,"style",u.style),n),[l>0&&i(o,{z:l,animated:!0}),u.content?u.content:e.children])},getInitialState:function(e){return{dom:void 0,visible:e.permanent||!1,transitioning:!1}},getUpdates:function(e){return{setVisible:function(t){return e(function(e){return e.visible=t,e})},setTransitioning:function(t){return e(function(e){return e.transitioning=t,e})},setDom:function(t){return e(function(e){return e.dom=t,e})}}},onMount:function(e){if(e.dom){var t=e.state,n=e.attrs;t.dom=e.dom,n.permanent||C(e,"mount"),k(t,n)}},onUnMount:function(e){e.attrs.permanent||C(e,"unmount")}};e.CoreMenu=j,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-menu.js.map
