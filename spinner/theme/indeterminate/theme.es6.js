import defaultConfig from 'polythene/spinner/theme/indeterminate/config';
import {spinner as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/spinner/theme/indeterminate/layout';
import color from 'polythene/spinner/theme/indeterminate/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-indeterminate', layout(config), color(config));