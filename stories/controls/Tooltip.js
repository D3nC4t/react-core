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
var _a, _b;
import {
  appTheme
} from '../../theme';
import {
  DefaultC4tControls
} from './default';
var TooltipControls = __assign({
  container: {
    description: 'The container for the tooltip, should be a DOM element',
    control: {
      type: 'null'
    },
  },
  leftOffset: {
    description: 'The left offset for the tooltip',
    control: {
      type: 'number'
    },
  },
  tooltip: {
    description: 'The text or ReactElement for the Tooltip element',
    control: {
      type: 'text'
    },
  },
  tooltipJCss: {
    description: 'The Css in Js for the tooltip',
    control: {
      type: 'text'
    },
  },
  topOffset: {
    description: 'The top offset for the tooltip',
    control: {
      type: 'number'
    },
  },
  typographyVariant: {
    description: 'The typography variant for the tooltip',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.typography.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the Tooltip element',
    options: __spreadArray([
      undefined
    ], Object.keys((_b = appTheme.components.C4tTooltip.variants) !== null && _b !== void 0 ? _b : {}), true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls);
export default TooltipControls;
