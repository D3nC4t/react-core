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
  getThemeColorOptions,
  getThemeColorVariantOptions
} from './color';
import {
  appTheme
} from '../../theme';
import {
  DefaultC4tControls
} from './default';
var BoxControls = __assign(__assign({
  tag: {
    description: 'The tag for the box element',
    options: [
      undefined, 'div', 'ul', 'li', 'table', 'header', 'i',
      'section', 'tr', 'td', 'th', 'thead', 'tbody'
    ],
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the box element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tBox.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), {
  $bgColor: {
    description: 'The background color for the alert, it can be a theme color',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions()
    },
  },
  $bgColorVariant: {
    description: 'The background color variant for the alert, if a theme color is used',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
  $bColor: {
    description: 'The border color for the alert, it can be a theme color',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions()
    },
  },
  $bColorVariant: {
    description: 'The border color variant for the alert, if a theme color is used',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
  $bRadius: {
    description: 'The border radius for the alert, needs to be a string with the unit, it does not use the $bUnit',
    control: {
      type: 'text'
    },
  },
  $bShape: {
    description: 'The border shape for the alert',
    options: [
      undefined, 'dotted', 'dashed', 'solid', 'double',
      'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'
    ],
    control: {
      type: 'select'
    },
  },
  $bSize: {
    description: 'The border width for the alert',
    control: {
      type: 'number'
    },
  },
  $bUnit: {
    description: 'The border width unit for the alert',
    options: [
      undefined, 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ex',
      'ch', 'rem', 'em', 'vw', 'vh', 'vmin', 'vmax', '%'
    ],
    control: {
      type: 'select'
    },
  },
  $gap: {
    description: 'The gap between the elements inside the box',
    control: {
      type: 'number'
    },
  }
});
export var BoxExtendedControls = __assign({
  boxVariant: BoxControls.variant
}, _objectWithoutProperties(BoxControls, ['variant']));
export default BoxControls;
