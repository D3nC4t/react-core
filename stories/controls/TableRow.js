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
  BoxExtendedControls
} from './Box';
var TableRowControls = __assign({
  children: {
    description: 'The children for the TableRow element, only accepts TableCell as children',
    control: {
      type: 'null'
    },
  },
  variant: {
    description: 'The variant for the TableRow element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tTableRow.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, BoxExtendedControls);
export default TableRowControls;
