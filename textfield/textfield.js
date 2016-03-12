"use strict";Object.defineProperty(exports,"__esModule",{value:true});require("polythene/common/object.assign");var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("polythene/textfield/theme/theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var startEventType=window.PointerEvent?"pointerdown":"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?"touchstart":"mousedown";var CSS_CLASSES={block:"pe-textfield",inputArea:"pe-textfield__input-area",input:"pe-textfield__input",label:"pe-textfield__label",counter:"pe-textfield__counter",help:"pe-textfield__help",focusHelp:"pe-textfield__help-focus",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",stateFocused:"pe-textfield--focused",stateDisabled:"pe-textfield--disabled",stateReadonly:"pe-textfield--readonly",stateInvalid:"pe-textfield--invalid",stateDirty:"pe-textfield--dirty",hasFloatingLabel:"pe-textfield--floating-label",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",hideRequiredChar:"pe-textfield--no-char",hasFullWidth:"pe-textfield--full-width",hasCounter:"pe-textfield--counter",hideSpinner:"pe-textfield--hide-spinner",hideClear:"pe-textfield--hide-clear",hideValidation:"pe-textfield--hide-validation"};var KEYBOARD_TIMEOUT=200;var validateCustom=function validateCustom(ctrl,opts){var state=opts.validate(ctrl.value);return{invalid:state&&!state.valid,message:state&&state.error}};var validateCounter=function validateCounter(ctrl,opts){return{invalid:ctrl.value.length>opts.counter,message:opts.error}};var validateHTML=function validateHTML(ctrl,opts){return{invalid:!ctrl.inputEl().checkValidity(),message:opts.error}};var getValidStatus=function getValidStatus(ctrl,opts){var status={invalid:false,message:undefined};if(opts.validate){status=validateCustom(ctrl,opts)}if(!status.invalid&&opts.counter){status=validateCounter(ctrl,opts)}if(!status.invalid&&ctrl.inputEl()&&ctrl.inputEl().checkValidity){status=validateHTML(ctrl,opts)}return status};var checkValidity=function checkValidity(ctrl,opts){if(!ctrl.touched&&!opts.validateAtStart){return}var status=getValidStatus(ctrl,opts);var previousInvalid=ctrl.isInvalid;if(status.invalid!==previousInvalid){ctrl.isInvalid=status.invalid;ctrl.error=status.message;setTimeout(_mithril2.default.redraw,0)}};var checkDirty=function checkDirty(ctrl){ctrl.isDirty=ctrl.value.length>0};var updateState=function updateState(ctrl,opts){checkValidity(ctrl,opts);checkDirty(ctrl)};var notifyState=function notifyState(ctrl,opts){if(opts.getState){var status=getValidStatus(ctrl,opts);opts.getState({focus:ctrl.focus(),dirty:ctrl.isDirty,value:ctrl.value,el:ctrl.inputEl(),invalid:status.invalid,error:status.error})}};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];updateState(ctrl,opts);var isInvalid=ctrl.isInvalid;var tag=opts.tag||"div";var type=!opts.type||opts.type==="submit"||opts.type==="search"?"text":opts.type;var inputTag=opts.multiline?"textarea":"input";var showError=isInvalid&&ctrl.error;var validates=opts.validate||opts.min||opts.max||opts.minlength||opts.required||opts.pattern;var inactive=opts.disabled||opts.readonly;if(opts.focus&&!ctrl.focus()&&!inactive){ctrl.focus(true);if(ctrl.inputEl()){ctrl.inputEl().focus()}}if(typeof opts.value==="function"&&ctrl.inputEl()&&!ctrl.focus()&&!inactive){var value=opts.value();ctrl.value=value;ctrl.touched=true;updateState(ctrl,opts);notifyState(ctrl,opts);ctrl.inputEl().value=value}var onBlur=function onBlur(e){ctrl.focus(false);ctrl.touched=true;ctrl.value=e.target.value;updateState(ctrl,opts);notifyState(ctrl,opts);ctrl.el.classList.remove(CSS_CLASSES.stateFocused)};var props={"class":[CSS_CLASSES.block,isInvalid?CSS_CLASSES.stateInvalid:"",ctrl.focus()?CSS_CLASSES.stateFocused:"",opts.floatingLabel?CSS_CLASSES.hasFloatingLabel:"",opts.disabled?CSS_CLASSES.stateDisabled:"",opts.readonly?CSS_CLASSES.stateReadonly:"",ctrl.isDirty?CSS_CLASSES.stateDirty:"",opts.dense?CSS_CLASSES.isDense:"",opts.required?CSS_CLASSES.isRequired:"",opts.fullWidth?CSS_CLASSES.hasFullWidth:"",opts.counter?CSS_CLASSES.hasCounter:"",opts.hideSpinner!==false?CSS_CLASSES.hideSpinner:"",opts.hideClear!==false?CSS_CLASSES.hideClear:"",opts.hideValidation?CSS_CLASSES.hideValidation:"",opts.hideRequiredMark?CSS_CLASSES.hideRequiredChar:"",opts.class].join(" "),id:opts.id||"",config:function config(el,inited,context,vdom){if(inited){return}if(opts.config){opts.config(el,inited,context,vdom)}ctrl.el=el;if(!inactive){updateState(ctrl,opts)}}};var content=[(0,_mithril2.default)("div",{"class":CSS_CLASSES.inputArea},[opts.label?(0,_mithril2.default)("label",_defineProperty({"class":CSS_CLASSES.label},"on"+startEventType,function(){if(!inactive){setTimeout(function(){ctrl.inputEl().focus()},0)}}),opts.label):null,(0,_mithril2.default)(inputTag,Object.assign({},{"class":CSS_CLASSES.input,type:type,onclick:function onclick(){if(inactive){return}ctrl.focus(true);notifyState(ctrl,opts)},onfocus:function onfocus(){if(inactive){return}ctrl.focus(true);if(ctrl.el){ctrl.el.classList.add(CSS_CLASSES.stateFocused)}notifyState(ctrl,opts)},oninput:function oninput(e){ctrl.value=e.target.value;if(opts.validateOnInput){ctrl.touched=true}updateState(ctrl,opts);notifyState(ctrl,opts);if(opts.oninput){opts.oninput(ctrl.value,e)}},onkeydown:function onkeydown(e){if(e.which===13){ctrl.touched=true;updateState(ctrl,opts);notifyState(ctrl,opts)}else if(e.which===27){ctrl.inputEl().blur(e)}else if(e.which===9){setTimeout(function(){_mithril2.default.redraw();setTimeout(_mithril2.default.redraw,250)},1)}},oninvalid:function oninvalid(e){return e.preventDefault()},config:function config(el,inited,context){if(inited){return}ctrl.inputEl(el);el.value=ctrl.value;notifyState(ctrl,opts);if(!inactive){el.addEventListener("blur",onBlur,true);context.onunload=function(){el.removeEventListener("blur",onBlur,true)}}},name:opts.name||"",disabled:opts.disabled},opts.events?opts.events:null,opts.readonly!==undefined?{readonly:true}:null,opts.pattern!==undefined?{pattern:opts.pattern}:null,opts.maxlength!==undefined?{maxlength:opts.maxlength}:null,opts.minlength!==undefined?{minlength:opts.minlength}:null,opts.max!==undefined?{max:opts.max}:null,opts.min!==undefined?{min:opts.min}:null,opts.autofocus!==undefined?{autofocus:opts.autofocus}:null,opts.required!==undefined?{required:opts.required}:null,opts.tabindex!==undefined?{tabindex:opts.tabindex}:null,opts.rows!==undefined?{rows:opts.rows}:null))]),opts.counter?(0,_mithril2.default)("div",{"class":CSS_CLASSES.counter},ctrl.value.length+" / "+opts.counter):null,opts.help&&!showError?(0,_mithril2.default)("div",{"class":[CSS_CLASSES.help,opts.focusHelp?CSS_CLASSES.focusHelp:""].join(" ")},opts.help):null,showError?(0,_mithril2.default)("div",{"class":CSS_CLASSES.error},ctrl.error):validates&&!opts.help?(0,_mithril2.default)("div",{"class":CSS_CLASSES.errorPlaceholder}):null];return(0,_mithril2.default)(tag,props,[opts.before,content,opts.after])};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var value=undefined,isInvalid=false,touched=false,error=opts.error||"",el=undefined,inputEl=_mithril2.default.prop(),hasFocus=opts.focus||false;if(typeof opts.value==="function"){var v=opts.value();value=v!==undefined?v:""}else{value=opts.value!==undefined?opts.value:""}if(value!==""){touched=true}var onMouseDown=function onMouseDown(e){setTimeout(function(){if(e.target!==inputEl()){inputEl().blur(e)}},KEYBOARD_TIMEOUT)};var focus=function focus(state){if(state===undefined){return hasFocus}hasFocus=state;if(hasFocus){document.body.addEventListener(startEventType,onMouseDown)}else{document.body.removeEventListener(startEventType,onMouseDown)}};return{value:value,error:error,el:el,inputEl:inputEl,focus:focus,isInvalid:isInvalid,touched:touched}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports.default=component;module.exports=exports["default"];