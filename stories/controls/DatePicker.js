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
var DatePickerControls = __assign(__assign(__assign({
  variant: {
    description: 'The variant for the box element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tDatePicker.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  },
  onChange: {
    description: 'The method that will be triggered every time the date gets changed',
    control: {
      type: 'function'
    },
  },
  pickType: {
    description: 'The type of picker',
    options: [
      undefined,
      'day',
      'month',
      'year',
    ],
    control: {
      type: 'select'
    },
  },
  selectedDate: {
    description: 'The date to be selected',
    control: {
      type: 'date'
    },
  },
  withTime: {
    description: 'If true will show the time picker',
    control: {
      type: 'boolean'
    },
  }
}, DefaultC4tControls), ColorControls), ColorVariantControls);
export default DatePickerControls;