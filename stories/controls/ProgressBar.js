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
  BoxExtendedControls
} from './Box';
var ProgressBarControls = __assign(__assign({
  min: {
    description: 'The min value for the ProgressBar element',
    control: {
      type: 'number'
    },
  },
  max: {
    description: 'The max value for the ProgressBar element',
    control: {
      type: 'number'
    },
  },
  hideProgress: {
    description: 'If true will hide the progress value',
    control: {
      type: 'boolean'
    },
  },
  step: {
    description: 'The number between the marks in the ProgressBar',
    control: {
      type: 'number'
    },
  },
  symbol: {
    description: 'The symbol for the ProgressBar element',
    control: {
      type: 'text'
    },
  },
  title: {
    description: 'The title for the ProgressBar element',
    control: {
      type: 'text'
    },
  },
  value: {
    description: 'The value for the ProgressBar element',
    control: {
      type: 'number'
    },
  },
  variant: {
    description: 'The variant for the ProgressBar element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tProgressBar.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  }
}, ColorControls), BoxExtendedControls);
export default ProgressBarControls;
