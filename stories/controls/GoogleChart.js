var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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
  ColorVariantControls,
  getThemeColorNames
} from './color';
import {
  DefaultC4tControls
} from './default';
var GoogleChartControls = __assign(__assign({
  color: {
    description: 'The color for this element, it has to be a valid theme color name',
    control: {
      type: 'select'
    },
    options: __spreadArray([
      undefined
    ], getThemeColorNames(), true),
  },
  data: {
    description: 'The data for the chart, check the google charts documentation for more info',
    control: {
      type: 'object'
    },
  }
}, ColorVariantControls), DefaultC4tControls);
export default GoogleChartControls;
