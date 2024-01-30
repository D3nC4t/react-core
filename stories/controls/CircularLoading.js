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
import {
  BoxExtendedControls
} from './Box';
import {
  ColorControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var CircularLoadingControls = __assign(__assign(__assign({
  linesJCss: {
    description: 'The Css in JS for the lines, this should be an object with the key as line index(starts at 0)',
    control: {
      type: 'object'
    },
  },
  lines$el: {
    description: 'The override elements for the lines' +
      ', this should be am object with the key as line index(starts at 0)',
    control: {
      type: 'null'
    },
  },
  nLines: {
    description: 'The number of lines to use' +
      ', remember that they should be styled and may be set a specific element with lines$el',
    control: {
      type: 'number'
    },
  },
  variant: {
    description: 'The variant for the CircularLoading element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tCircularLoading.variants) !== null && _a !== void 0 ? _a :
      {}), true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls), _objectWithoutProperties(BoxExtendedControls !== null &&
  BoxExtendedControls !== void 0 ? BoxExtendedControls : {}, ['variant']));
export default CircularLoadingControls;
