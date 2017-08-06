!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.polythene={})}(this,function(e){"use strict";var n="undefined"!=typeof document,t=!n,o={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},i=function(){if(n){var e=document.createElement("fakeelement");for(var t in o)if(void 0!==e.style[t])return o[t]}},r={view:function(e,n){var t=n.renderer,o=e.attrs;return o.permanent||o.show?t(o.instance,o):t("span",{className:o.placeholderClassName})}};r.displayName="Conditional";var u=function(e,n){return e[n]=1,e},a=["key","style","href","id","tabIndex","tabindex","oninit","oncreate","onupdate","onbeforeremove","onremove","onbeforeupdate"],d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.add,o=void 0===t?[]:t,i=n.remove,r=(void 0===i?[]:i).reduce(u,{}),d=a.concat(o).filter(function(e){return!r[e]}).reduce(u,{});return Object.keys(e).reduce(function(n,t){return d[t]&&(n[t]=e[t]),n},{})},s=function(e){return"function"==typeof e?e():e},c=!t&&"ontouchstart"in document.documentElement,l=c?"click":"mousedown",f=c?"click":"mouseup",h=c?"touchstart":"mousedown",m=c?"touchmove":"mousemove",v=c?"touchend":"mouseup";n&&document.querySelector("html").classList.add(c?"pe-touch":"pe-no-touch");var p={},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.05,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n?window:{},i=!1;return function(){for(var n=arguments.length,r=Array(n),u=0;u<n;u++)r[u]=arguments[u];i||(!function(){e.apply(o,r)}(),i=!0,setTimeout(function(){return i=!1},t))}},y=function(e,n,t){p[e]=p[e]||[],p[e].push(t?w(n,t):n)},g=function(e,n){if(p[e]){var t=p[e].indexOf(n);t>-1&&p[e].splice(t,1)}},b=function(e,n){p[e]&&p[e].forEach(function(e){return e(n)})};n&&(window.addEventListener("resize",function(e){return b("resize",e)}),window.addEventListener("scroll",function(e){return b("scroll",e)}),window.addEventListener("keydown",function(e){return b("keydown",e)}),window.addEventListener(f,function(e){return b(f,e)}));var I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},S=function(e){var t=e.options,o=e.renderer,i=[],r=void 0,u=function(e){r||console.error("Cannot set state. Did you set a root element like Dialog to show instances?"),r(e.id),b(t.name,e)},a=function(e){var n=l(e);return i.indexOf(n)},d=function(e){var n=a(e);-1!==n&&i.splice(n,1),u({id:e,name:"removeItem"})},c=function(e,n){var t=a(e);-1!==t&&(i[t]=n)},l=function(e){for(var n=0;n<i.length;n++)if(i[n].instanceId===e)return i[n]},f=function(){i.length&&(i[0].show=!0),u({id:i.length?i[0].instanceId:null,name:"next"})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultId;t.queue?(i.shift(),f()):d(e)},m=function(){i.length=0,u({id:null,name:"removeAll"})},v=function(e,n){var t=l(n);t&&(t.pause=e,t.unpause=!e,u({id:n,name:e?"pause":"unpause"}))},p=function(e,n,o){var i=void 0,r=void 0,a=s(e),d=function(){return a.didShow&&a.didShow(n),u({id:n,name:"didShow"}),i(n)},c=new Promise(function(e){return i=e}),l=function(){return a.didHide&&a.didHide(n),u({id:n,name:"didHide"}),h(n),r(n)},f=new Promise(function(e){return r=e});return I({},t,{instanceId:n,spawn:o,attrs:e,show:!t.queue,showPromise:c,hidePromise:f,didShow:d,didHide:l})};return{clear:function(){return m()},count:function(){return i.length},getInitialState:function(e,n){return r=n(),{current:r,redrawOnUpdate:n.merge([r])}},hide:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id||t.defaultId,n=t.queue&&i.length?i[0]:l(e);return n&&(n.hide=!0),u({id:e,name:"hide"}),n?n.hidePromise:Promise.resolve(e)},pause:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultId;return v(!0,e)},remove:h,show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.id||t.defaultId,r=n.spawn||t.defaultId,a=p(e,o,r);return u({id:o,name:"show"}),t.queue?(i.push(a),1===i.length&&f()):l(o)?c(o,a):i.push(a),a.showPromise},unpause:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultId;return v(!1,e)},view:function(e){var r=e.attrs,u=r.spawn||t.defaultId,a=i.filter(function(e){return e.show&&e.spawn===u});return t.bodyShowClass&&n&&document.body.classList[a.length?"add":"remove"](t.bodyShowClass),a.length?o(t.holderSelector,{className:"container"===r.position?"pe-multiple--container":"pe-multiple--screen"},a.map(function(e){return o(t.instance,I({},{key:e.key,instanceId:e.instanceId,transitions:t.transitions,holderSelector:t.holderSelector,className:t.className,showInstance:e.show,hideInstance:e.hide,pauseInstance:e.pause,unpauseInstance:e.unpause,multipleDidShow:e.didShow,multipleDidHide:e.didHide},s(e.attrs)))})):o(t.placeholder)}}};S.displayName="Multi";var E=function(e){return C(e,"show")},k=function(e){return C(e,"hide")},D=function(e,n,t,o,i,r){var u=e.transition||"both";return"none"===u?0:"show"===u&&"hide"===n?0:"hide"===u&&"show"===n?0:"show"===n?void 0!==e[t]?e[t]:i:void 0!==e[o]?e[o]:r},P=function(e,n){return D(e,n,"showDuration","hideDuration",.22,.2)},A=function(e,n){return D(e,n,"showDelay","hideDelay",0,0)},C=function(e,n){var t=e.el;return t?new Promise(function(o){var i=1e3*P(e,n),r=1e3*A(e,n),u=t.style,a=e.beforeShow&&"show"===n?function(){u.transitionDuration="0ms",u.transitionDelay="0ms",e.beforeShow()}:null,d=e.afterHide&&"hide"===n?function(){return e.afterHide()}:null,s=function(){u.transitionDuration=i+"ms",u.transitionDelay=r+"ms",e.showClass&&t.classList["show"===n?"add":"remove"](e.showClass),e.show&&"function"==typeof e.show&&"show"===n&&e.show(),e.hide&&"function"==typeof e.hide&&"hide"===n&&e.hide()},c=function(){s(),setTimeout(function(){d&&d(),o()},i+r)},l=function(){0===i?c():setTimeout(c,0)};a?(a(),setTimeout(function(){l()},100)):l()}):Promise.resolve()};e.getAnimationEndEvent=i,e.Conditional=r,e.filterSupportedAttributes=d,e.unpackAttrs=s,e.isClient=n,e.isServer=t,e.isTouch=c,e.pointerStartEvent=l,e.pointerEndEvent=f,e.pointerStartMoveEvent=h,e.pointerMoveEvent=m,e.pointerEndMoveEvent=v,e.Multi=S,e.show=E,e.hide=k,e.throttle=w,e.subscribe=y,e.unsubscribe=g,e.emit=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core.js.map
