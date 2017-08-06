!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,i){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={component:"pe-ripple",mask:"pe-ripple__mask",waves:"pe-ripple__waves",constrained:"pe-ripple--constrained",wavesAnimating:"pe-ripple__waves--animating"},l={color:"inherit"},c=function(e){return[r({},e,[n.mixin.fit(),{color:"inherit",borderRadius:"inherit",pointerEvents:"none",".pe-ripple--constrained":{borderRadius:"inherit"," .pe-ripple__mask":{overflow:"hidden",borderRadius:"inherit"}}," .pe-ripple__mask":[n.mixin.fit(),{transform:"translate3d(0,0,0)"}]," .pe-ripple__waves":{outline:"1px solid transparent",position:"absolute",borderRadius:"50%",pointerEvents:"none",display:"none"}," .pe-ripple__waves--animating":{display:"block"}}])]},p=function(e,t,n,i){return[a({},e.map(function(e){return e+t}).join(","),{color:n["color_"+i]||n.color||"inherit"})]},u=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m=[c,u],f="."+s.component,v=function(e,t){return n.styler.generateStyles([e,f],d({},l,t),m)};n.styler.generateStyles([f],l,m);var h=t.getAnimationEndEvent(),y=function(e){var r=e.e,a=e.id,s=e.el,l=e.attrs,c=e.classes;return new Promise(function(e){var p=document.createElement("div");p.setAttribute("class",c.mask),s.appendChild(p);var u=document.createElement("div");u.setAttribute("class",c.waves),p.appendChild(u);var d=s.getBoundingClientRect(),m=t.isTouch&&r.touches?r.touches[0].pageX:r.clientX,f=t.isTouch&&r.touches?r.touches[0].pageY:r.clientY,v=s.offsetWidth,y=s.offsetHeight,g=Math.sqrt(v*v+y*y),b=l.center?d.left+d.width/2:m,w=l.center?d.top+d.height/2:f,_=b-d.left-g/2,k=w-d.top-g/2,E=void 0!==l.startOpacity?l.startOpacity:.2,O=void 0!==l.opacityDecayVelocity?l.opacityDecayVelocity:.35,j=l.endOpacity||0,x=l.startScale||.1,P=l.endScale||2,S=l.duration?l.duration:1/O*.2,A=window.getComputedStyle(s).color,C=u.style;C.width=C.height=g+"px",C.top=k+"px",C.left=_+"px",C["animation-duration"]=C["-webkit-animation-duration"]=C["-moz-animation-duration"]=C["-o-animation-duration"]=S+"s",C.backgroundColor=A,C.opacity=E,C.animationName=a,C.animationTimingFunction=l.animationTimingFunction||i.vars.animation_curve_default;var L=[o({},"@keyframes "+a,{" 0%":{transform:"scale("+x+")",opacity:E}," 100%":{transform:"scale("+P+")",opacity:j}})];n.styler.add(a,L);var R=function t(i){n.styler.remove(a),u.removeEventListener(h,t,!1),l.persistent?(C.opacity=j,C.transform="scale("+P+")"):(u.classList.remove(c.wavesAnimating),p.removeChild(u),s.removeChild(p)),e(i)};u.addEventListener(h,R,!1),u.classList.add(c.wavesAnimating)})},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b=function(e){return e.attrs.element||"div"},w=v,_=function(){return{animations:{},animating:!1,cleanUp:void 0}},k=function(e,n){var i=n.keys,r=e.attrs;return g({},t.filterSupportedAttributes(r),{className:[s.component,!1!==r.constrained?s.constrained:null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[i.class]].join(" ")})},E=function(e){return e.animating=Object.keys(e.animations).length>0},O=function(e){if(e.dom||!t.isServer){var n=e.state,i=e.attrs,r=function(t){if(!(i.disabled||!i.multi&&n.animating)){i.start&&i.start(t);var r="ripple_animation_"+(new Date).getTime();n.animations[r]=y({e:t,id:r,el:e.dom,attrs:i,classes:s}).then(function(e){i.end&&i.end(e),delete n.animations[r],E(n)}),E(n)}},a=i.target?i.target:e.dom&&e.dom.parentElement;a.addEventListener(t.pointerEndEvent,r,!1),n.cleanUp=function(){return a.removeEventListener(t.pointerEndEvent,r,!1)}}},j=function(e){var t=e.state;return t.cleanUp&&t.cleanUp()},x=Object.freeze({getElement:b,theme:w,getInitialState:_,createProps:k,onMount:O,onUnMount:j});e.coreRipple=x,e.classes=s,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-ripple.js.map
