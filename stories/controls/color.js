var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
import {
  appTheme
} from '../../theme';
export var getThemeColorNames = function() {
  return Object.keys(appTheme.color);
};
export var getThemeColorOptions = function() {
  var colors = [];
  for (var _i = 0, _a = Object.values(appTheme.color); _i < _a.length; _i++) {
    var variants = _a[_i];
    colors.push(variants.main);
  }
  return colors;
};
export var getThemeColorVariantOptions = function() {
  return __spreadArray([
    undefined
  ], Object.keys(appTheme.color.primary), true);
};
export var ColorControls = {
  color: {
    description: 'The color for this element, it can be a static color(rgb, hex, etc) or a theme color name',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions(),
    },
  },
};
export var ColorVariantControls = {
  colorVariant: {
    description: 'The color variant for this element, use only if a theme color is being used too',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
};
