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
var TableCellControls = __assign({
  children: {
    description: 'The children for the Cell element, it can be anything',
    control: {
      type: 'null'
    },
  },
  colspan: {
    description: 'The number of columns for the Cell element',
    control: {
      type: 'number'
    },
  },
  rowspan: {
    description: 'The number of rows for the Cell element',
    control: {
      type: 'number'
    },
  },
  tag: {
    description: 'The tag for the Cell element',
    options: [undefined, 'td', 'th'],
    control: {
      type: 'radio'
    },
  },
  variant: {
    description: 'The variant for the Cell element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tTableCell.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, BoxExtendedControls);
export default TableCellControls;
