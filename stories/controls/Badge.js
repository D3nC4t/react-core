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
import BoxControls from './Box';
import {
  ColorControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var BadgeControls = __assign(__assign(__assign({
  children: {
    description: 'The children for the Badge element, it can be a string, a number or a ReactElement',
    control: {
      type: 'null'
    },
  },
  showAsDot: {
    description: 'If the Badge element should be shown as a dot and on hover show the text',
    control: {
      type: 'boolean'
    },
  },
  position: {
    description: 'The position for the Badge element',
    options: [
      undefined, 'bottom-left', 'bottom-right', 'top-left', 'top-right'
    ],
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the Badge element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tBadge.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls), _objectWithoutProperties(BoxControls !== null && BoxControls !== void 0 ?
  BoxControls : {}, ['variant']));
export default BadgeControls;
