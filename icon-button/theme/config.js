"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polytheneConfigConfig=require("polythene/config/config");var _polytheneConfigConfig2=_interopRequireDefault(_polytheneConfigConfig);var _polytheneButtonThemeConfig=require("polythene/button/theme/config");var _polytheneButtonThemeConfig2=_interopRequireDefault(_polytheneButtonThemeConfig);exports["default"]=Object.assign({},_polytheneButtonThemeConfig2["default"],{padding:(_polytheneConfigConfig2["default"].grid_unit_icon_button-_polytheneConfigConfig2["default"].unit_icon_size)/2,color_light_wash_opacity:_polytheneConfigConfig2["default"].blend_light_background_hover_medium,color_light_flat_normal_text:_polytheneConfigConfig2["default"].rgba(_polytheneConfigConfig2["default"].color_light_foreground,_polytheneConfigConfig2["default"].blend_light_text_secondary),color_dark_wash_opacity:_polytheneConfigConfig2["default"].blend_dark_background_hover_medium,color_dark_flat_normal_text:_polytheneConfigConfig2["default"].rgba(_polytheneConfigConfig2["default"].color_dark_foreground,_polytheneConfigConfig2["default"].blend_dark_text_secondary)});module.exports=exports["default"];