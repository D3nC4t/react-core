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
  ColorControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var ButtonGroupControls = __assign(__assign({
  children: {
    description: 'The children for the ButtonGroup element, it must be a list of Button elements',
    control: {
      type: 'null'
    },
  },
  orientation: {
    description: 'The orientation for the ButtonGroup element',
    options: [
      undefined, 'horizontal', 'vertical'
    ],
    control: {
      type: 'radio'
    },
  },
  size: {
    description: 'The size for the ButtonGroup element',
    options: [
      undefined, 'small', 'medium', 'large'
    ],
    control: {
      type: 'radio'
    },
  },
  variant: {
    description: 'The variant for the ButtonGroup element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tButtonGroup.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls);
export default ButtonGroupControls;
