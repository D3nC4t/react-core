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
var ConfirmModalControls = __assign(__assign(__assign({
  children: {
    description: 'The value to be shown as content of the div, it can be a string or a ReactElement',
    control: {
      type: 'null'
    },
  },
  onCancel: {
    description: 'The action to execute by clicking on the cancel button',
    control: {
      type: 'null'
    },
  },
  onConfirm: {
    description: 'The action to execute by clicking on the confirm button',
    control: {
      type: 'null'
    },
  },
  variant: {
    description: 'The variant for the box element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tConfirmModal.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls), ColorVariantControls);
export default ConfirmModalControls;
