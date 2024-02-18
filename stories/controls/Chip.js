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
  getThemeColorOptions,
  getThemeColorVariantOptions
} from './color';
import {
  appTheme
} from '../../theme';
import CircularLoadingControls from './CircularLoading';
import {
  ColorControls,
  ColorVariantControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var ChipControls = __assign(__assign(__assign({
  component: {
    description: 'The component for the Chip element',
    options: [
      undefined, 'a', 'button', 'div'
    ],
    control: {
      type: 'radio'
    },
  },
  href: {
    description: 'The link for the Chip element, when the component is a link element',
    control: {
      type: 'text'
    },
  },
  label: {
    description: 'The label for the Chip element',
    control: {
      type: 'text'
    },
  },
  loadingVariant: {
    description: 'The loading variant for the Chip element',
    options: (_a = CircularLoadingControls === null || CircularLoadingControls === void 0 ? void 0 :
      CircularLoadingControls.variant) === null || _a === void 0 ? void 0 : _a.options,
    control: {
      type: 'select'
    },
  },
  onRemove: {
    description: 'The callback to call when the Chip element is removed, if used will show a remove icon',
    control: {
      type: 'null'
    },
  },
  prepend: {
    description: 'The Avatar or Icon element to prepend to the Chip label',
    control: {
      type: 'null'
    },
  },
  removeColor: {
    description: 'The color for the remove icon',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions()
    },
  },
  removeColorVariant: {
    description: 'The color variant for the remove icon, use only if the color in use is a theme color',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the Chip element',
    options: __spreadArray([
      undefined
    ], Object.keys((_b = appTheme.components.C4tChip.variants) !== null && _b !== void 0 ? _b : {}), true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), ColorControls), ColorVariantControls);
export default ChipControls;
