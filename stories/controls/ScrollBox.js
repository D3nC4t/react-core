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
var _a;
import {
  appTheme
} from '../../theme';
import {
  ColorControls,
  ColorVariantControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var ScrollBoxControls = __assign(__assign(__assign({
  children: {
    description: 'The value to be shown as content of the div, it can be a string or a ReactElement',
    control: {
      type: 'null'
    },
  },
  hideScroll: {
    description: 'If the scroll should be hidden',
    control: {
      type: 'boolean'
    },
  },
  maxBoxSize: {
    description: 'The maximum size for the box element',
    control: {
      type: 'number'
    },
  },
  minThumbSize: {
    description: 'The minimum size for the thumb element',
    control: {
      type: 'number'
    },
  },
  scrollDirection: {
    description: 'The direction for the scroll',
    options: ['vertical', 'horizontal'],
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the box element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tScrollBox.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls), ColorVariantControls);
export default ScrollBoxControls;
