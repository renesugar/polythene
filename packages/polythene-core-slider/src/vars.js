import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

const lightForeground =                vars.color_light_foreground;
const darkForeground =                 vars.color_dark_foreground;
const activeColor =                    vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
const thumb_size =                     12;
const thumb_touch_size =               Math.max(40, thumb_size);
const thumb_border_width =             2;
const active_thumb_scale =             3/2;
const disabled_thumb_scale =           1/2;
const active_pin_thumb_scale =         2/6;
const largestThumbSize =               active_thumb_scale * thumb_size;
const largestElement =                 Math.max(thumb_touch_size, largestThumbSize);
const height =                         Math.max(52, largestThumbSize);
const side_spacing =                   Math.max(10, largestElement / 2 - thumb_size / 2);
const horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

export default {
  height,
  side_spacing,
  horizontal_layout_side_spacing,
  thumb_size,
  thumb_touch_size,
  track_height: height,
  bar_height: 2,
  thumb_border_width,
  active_thumb_scale,
  animation_duration: vars.animation_duration,
  disabled_thumb_scale,
  active_pin_thumb_scale,

  step_width: 2,
  pin_height: 32,
  pin_width: 26,
  pin_font_size: 10,

  color_light_track_active:            rgba(lightForeground, .38),
  color_light_track_inactive:          rgba(lightForeground, .26),
  color_light_track_value:             rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off:               rgba(lightForeground, .26),
  color_light_thumb_off_focus:         rgba(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on:                rgba(activeColor),
  color_light_thumb_on_focus_opacity:  .11,
  color_light_thumb_inactive:          rgba(lightForeground, .26),
  color_light_tick:                    rgba(lightForeground, 1),
  color_light_icon:                    rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled_icon:           rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_label:                   rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled_label:          rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_track_active:             rgba(darkForeground, .3),
  color_dark_track_inactive:           rgba(darkForeground, .2),
  color_dark_track_value:              rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off:                rgba(darkForeground, .2),
  color_dark_thumb_off_focus:          rgba(darkForeground),
  color_dark_thumb_off_focus_opacity:  .08,
  color_dark_thumb_on:                 rgba(activeColor),
  color_dark_thumb_on_focus_opacity:   .11,
  color_dark_thumb_inactive:           rgba(darkForeground, .2),
  color_dark_tick:                     rgba(darkForeground, 1),
  color_dark_icon:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled_icon:            rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_label:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled_label:           rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};
