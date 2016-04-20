"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),require("polythene/common/object.assign");var _polythene=require("polythene/polythene/polythene"),_polythene2=_interopRequireDefault(_polythene),_events=require("polythene/common/events"),_events2=_interopRequireDefault(_events),_mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_toolbar=require("polythene/toolbar/toolbar"),_toolbar2=_interopRequireDefault(_toolbar);require("polythene/header-panel/theme/theme");var CSS_CLASSES={panel:"pe-header-panel",header:"pe-header",dropShadow:"pe-header-panel__drop-shadow",outerContainer:"pe-header-panel__outer-container",headerContainer:"pe-header-panel__header-container",backgroundContainer:"pe-header-panel__background-container",condensedBackground:"pe-header-panel__condensed-background",headerBackground:"pe-header-panel__header-background",mediaDimmer:"pe-header-panel__media-dimmer",mainContainer:"pe-header-panel__main-container",headerAnimated:"pe-header--animated",fixed:"pe-header-panel--fixed",cascaded:"pe-header-panel--cascaded",modeCover:"pe-header-panel--cover",modeScroll:"pe-header-panel--scroll",modeSeamed:"pe-header-panel--seamed",modeStandard:"pe-header-panel--standard",modeTall:"pe-header-panel--tall",modeWaterfallTall:"pe-header-panel--waterfall-tall",modeWaterfall:"pe-header-panel--waterfall",toolbar:"pe-toolbar",toolbarTopbar:"pe-toolbar__bar--top",headerTall:"pe-header--tall"},DEFAULT_SHADOW_HEIGTH=6,DEFAULT_HEADER_HEIGHT=192,DEFAULT_CONDENSED_HEADER_HEIGHT=DEFAULT_HEADER_HEIGHT/3,SCROLL_WATCH_TIMER=150,scroller=void 0,scrollPositions={},modeConfigs={shadowAfterScroll:{waterfall:1,"waterfall-tall":1},alwaysShadow:{standard:1,tall:1},noShadow:{seamed:1,cover:1,scroll:1},tallMode:{tall:!0,"waterfall-tall":!0},outerScroll:{scroll:1}},modeClasses={cover:CSS_CLASSES.modeCover,scroll:CSS_CLASSES.modeScroll,seamed:CSS_CLASSES.modeSeamed,standard:CSS_CLASSES.modeStandard,tall:CSS_CLASSES.modeTall,"waterfall-tall":CSS_CLASSES.modeWaterfallTall,waterfall:CSS_CLASSES.modeWaterfall},classForMode=function(){var mode=arguments.length<=0||void 0===arguments[0]?"standard":arguments[0];return modeClasses[mode]},setTransform=void 0!==document.documentElement.style.transform?function(style,string){style.transform=string}:function(style,string){style.webkitTransform=string},translateY=function(style,y){var t=null===y?"":"translate3d(0, "+y+"px, 0)";setTransform(style,t)},createHeaderComponent=function(){var opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],tall=opts.tall||!1,tallClass=opts.tallClass||"",toolbarOpts=opts.toolbar;return toolbarOpts?(toolbarOpts["class"]=[toolbarOpts["class"]||null,tall?tallClass:null].join(" "),toolbarOpts.topBar||(toolbarOpts.topBar=(0,_mithril2["default"])("div")),_mithril2["default"].component(_toolbar2["default"],toolbarOpts)):opts.content?(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.header,opts["class"]||null,tall?tallClass:null,opts.animated?CSS_CLASSES.headerAnimated:""].join(" ")},opts.content):(0,_mithril2["default"])("div",opts)},createViewHeader=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],initHeaderContainer=function(headerContainer,inited){inited||(ctrl.headerContainerElem=headerContainer)},header=opts.header?createHeaderComponent(Object.assign({},opts.header,ctrl.headerConfig)):null;return(0,_mithril2["default"])("div",{"class":CSS_CLASSES.headerContainer,config:initHeaderContainer},[(0,_mithril2["default"])("div",{"class":CSS_CLASSES.backgroundContainer},[(0,_mithril2["default"])("div",{"class":CSS_CLASSES.condensedBackground}),(0,_mithril2["default"])("div",{"class":CSS_CLASSES.headerBackground}),(0,_mithril2["default"])("div",{"class":CSS_CLASSES.mediaDimmer})]),header,"seamed"===ctrl.mode||ctrl.shadow===!1?null:(0,_mithril2["default"])("div",{"class":CSS_CLASSES.dropShadow})])},createViewContent=function(ctrl,scrollConfig){var opts=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],initMainContainer=function(mainContainer,inited){inited||scrollConfig.main&&(ctrl.scrollerElem=mainContainer)};return[(0,_mithril2["default"])("div",{"class":CSS_CLASSES.mainContainer,config:initMainContainer,onscroll:function(e){scrollConfig.main(e),_events2["default"].emit("scroll",e),ctrl.storeScrollPosition(e.target.scrollTop)}},opts.content?opts.content:null)]},createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],scrollConfig=void 0;opts.header=opts.header||{},opts.configs=opts.configs||[],ctrl.init(ctrl);var updateContentOnScroll=opts.updateContentOnScroll||!1,ignoreContent=!updateContentOnScroll&&ctrl.isScrolling,scrollerType=modeConfigs.outerScroll[ctrl.mode]?"outer":"main",handleScroll=ctrl.handleScroll.bind(ctrl),header=createViewHeader(ctrl,opts),tag=opts.tag||"div";scrollConfig={},scrollConfig[scrollerType]=handleScroll;var initOuterContainer=function(outerContainer,inited){var headerElem=outerContainer.querySelector("."+CSS_CLASSES.header)||outerContainer.querySelector("."+CSS_CLASSES.toolbar);if(headerElem&&(!inited||!ctrl.headerElem)){var headerContainer=outerContainer.querySelector("."+CSS_CLASSES.headerContainer),topBarElem=headerContainer.querySelector("."+CSS_CLASSES.toolbarTopbar),headerBg=headerContainer.querySelector("."+CSS_CLASSES.headerBackground),condensedHeaderBg=headerContainer.querySelector("."+CSS_CLASSES.condensedBackground);ctrl.outerContainerElem=outerContainer,ctrl.headerElem=headerElem,ctrl.headerTopBarElem=topBarElem,ctrl.headerBg=headerBg,ctrl.condensedHeaderBg=condensedHeaderBg,opts.animated||ctrl.setHeight(headerContainer.clientHeight),scrollConfig.outer&&(ctrl.scrollerElem=outerContainer),ctrl.restoreScrollPosition(),handleScroll()}},props=Object.assign({},{"class":[CSS_CLASSES.panel,ctrl.fixed?CSS_CLASSES.fixed:null,classForMode(ctrl.mode),opts["class"]].join(" "),id:opts.id||"",config:function(el,inited){inited||(ctrl.headerPanelElem=el)}}),content=(0,_mithril2["default"])("div",{"class":CSS_CLASSES.outerContainer,config:initOuterContainer,onscroll:function(e){scrollConfig.outer(e),_events2["default"].emit("scroll",e)}},[header,ignoreContent?{subtree:"retain"}:createViewContent(ctrl,scrollConfig,opts)]);return(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])},component={controller:function(){var _this=this,opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],ctrl=void 0,mode=void 0,y=void 0,scrolled=void 0,prevScrollTop=void 0,headerMargin=void 0,headerHeight=void 0;opts.mode?mode=opts.mode:opts.header&&opts.header.toolbar?mode=opts.header.toolbar.mode:opts.header&&opts.header.content&&(mode=opts.header.mode),mode=mode||"standard";var tall=modeConfigs.tallMode[mode]||!1,tallClass=opts.tallClass||CSS_CLASSES.headerTall,animated=opts.animated||!1,fixed=opts.fixed||!1,condenses=opts.condenses||!1,scrollAwayTopbar=opts.scrollAwayTopbar||!1,noReveal=opts.noReveal||!1,keepCondensedHeader=opts.keepCondensedHeader||!1,noDissolve=opts.noDissolve||!1,backgroundScrollSpeed=void 0!==opts.backgroundScrollSpeed?opts.backgroundScrollSpeed:.5;y=0,scrolled=!1,prevScrollTop=0;var shadowHeight=DEFAULT_SHADOW_HEIGTH;headerHeight=(opts.headerHeight||DEFAULT_HEADER_HEIGHT)+shadowHeight;var condensedHeaderHeight=(opts.condensedHeaderHeight||DEFAULT_CONDENSED_HEADER_HEIGHT)+shadowHeight;headerMargin=headerHeight-condensedHeaderHeight;var handleScrollFns={standard:function(){},fixed:function(){var sTop=ctrl.scrollerElem.scrollTop,isScrolled=sTop>0;ctrl.showShadow(isScrolled),scrolled=isScrolled},animated:function(){var sTop=ctrl.scrollerElem.scrollTop,isScrolled=sTop>0;if(isScrolled!==scrolled){var headerElem=ctrl.headerElem;headerElem&&tall&&headerElem.classList[isScrolled?"remove":"add"](tallClass),ctrl.showShadow(isScrolled),scrolled=isScrolled}},dynamicHeader:function(){var sy=void 0,cascaded=!1,sTop=ctrl.scrollerElem.scrollTop;headerMargin>sTop?sy=sTop:(sy=Math.min(keepCondensedHeader?headerMargin:headerHeight,Math.max(0,noReveal||keepCondensedHeader?sTop:y+sTop-prevScrollTop)),condenses&&prevScrollTop>=sTop&&sTop>headerMargin&&(sy=Math.max(sy,headerMargin))),sTop>0?ctrl.transformHeader(sy):_polythene2["default"].isTouch&&ctrl.enlargeImage(sy),modeConfigs.noShadow[opts.mode]||(sTop>sy&&(cascaded=!0),ctrl.showShadow(cascaded)),y=sy,prevScrollTop=Math.max(sTop,0)}};return{headerPanelElem:void 0,scrollerElem:void 0,outerContainerElem:void 0,headerContainerElem:void 0,headerTopBarElem:void 0,headerElem:void 0,headerBg:void 0,condensedHeaderBg:void 0,mode:mode,fixed:fixed,shadow:!(void 0!==opts.shadow&&!opts.shadow),scrollWatchId:0,isScrolling:!1,headerConfig:{tall:tall,tallClass:tallClass,animated:animated,fixed:fixed},init:function(controller){ctrl=controller},setHeight:function(h){var mainContainer=void 0;void 0===opts.headerHeight&&(headerHeight=h+shadowHeight,headerMargin=headerHeight-condensedHeaderHeight),fixed||(mainContainer=ctrl.outerContainerElem.querySelector("."+CSS_CLASSES.mainContainer),mainContainer.style.paddingTop=h+"px"),noReveal&&ctrl.showShadow(!1)},handleScroll:function(e){var fn=void 0;e&&(ctrl.isScrolling=!0,scroller=ctrl,clearTimeout(ctrl.scrollWatchId),ctrl.scrollWatchId=setTimeout(function(){ctrl.isScrolling=!1,scroller=void 0},SCROLL_WATCH_TIMER)),"scroll"!==mode&&(modeConfigs.alwaysShadow[mode]&&ctrl.showShadow(!0),animated&&(fn=handleScrollFns.animated,fn.bind(_this).call()),fn="standard"===mode?handleScrollFns.standard:fixed?handleScrollFns.fixed:handleScrollFns.dynamicHeader,fn.bind(_this).call(),e&&opts.scroll&&opts.scroll(e))},condenseHeader:function(hy){var hbg=void 0,chbg=void 0,reset=null===hy;scrollAwayTopbar||ctrl.headerTopBarElem&&translateY(ctrl.headerTopBarElem.style,Math.min(hy,headerMargin)),hbg=ctrl.headerBg.style,hbg&&(noDissolve||(hbg.opacity=reset?"":(headerMargin-hy)/headerMargin),translateY(hbg,reset?null:hy*backgroundScrollSpeed),noDissolve||(chbg=ctrl.condensedHeaderBg.style,chbg.opacity=reset?"":hy/headerMargin,translateY(chbg,reset?null:hy*backgroundScrollSpeed)))},transformHeader:function(hy){0>hy||(translateY(ctrl.headerContainerElem.style,-hy),condenses&&ctrl.condenseHeader(hy),opts.transform&&opts.transform({y:hy,height:headerHeight,condensedHeight:condensedHeaderHeight}))},enlargeImage:function(hy){ctrl.headerBg.style.height=100/headerHeight*(headerHeight+Math.abs(hy/2))+"%"},showShadow:function(cascaded){modeConfigs.alwaysShadow[mode]&&(cascaded=!0),ctrl.outerContainerElem.classList[cascaded?"add":"remove"](CSS_CLASSES.cascaded)},storeScrollPosition:function(scrollTop){opts.restoreScrollPositionId&&(scrollPositions[opts.restoreScrollPositionId]=scrollTop)},restoreScrollPosition:function(){opts.restoreScrollPositionId&&!function(){var scrollTop=scrollPositions[opts.restoreScrollPositionId];if(void 0!==scrollTop){var restore=function(){return ctrl.scrollerElem.scrollTop=scrollTop};restore(),setTimeout(restore,0)}}()}}},view:function(ctrl,opts){return scroller&&scroller!==ctrl?{subtree:"retain"}:createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=header-panel.js.map