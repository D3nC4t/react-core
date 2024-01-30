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
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import {
  appTheme
} from '../../theme';
import TypographyControls from './Typography';
var LinkControls = __assign({
  href: {
    description: 'The url for the Link element',
    control: {
      type: 'text'
    },
  },
  typographyVariant: TypographyControls === null || TypographyControls === void 0 ? void 0 : TypographyControls
    .variant,
  variant: {
    description: 'The variant for the Link element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tLink.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, _objectWithoutProperties(TypographyControls !== null && TypographyControls !== void 0 ? TypographyControls : {},
  ['tag', 'variant']));
export default LinkControls;
