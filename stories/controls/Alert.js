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
  ColorControls,
  ColorVariantControls,
  getThemeColorOptions,
  getThemeColorVariantOptions
} from './color';
import {
  appTheme
} from '../../theme';
import {
  BoxExtendedControls
} from './Box';
var AlertControls = __assign(__assign(__assign({
  children: {
    description: 'The value to be shown as content of the div, it can be a string or a ReactElement',
    control: {
      type: 'null'
    },
  },
  closeIcon: {
    description: 'The icon to show to close the alert' +
      ', should be used a IconDefinition from @fortawesome/fontawesome-svg-core',
    control: {
      type: 'null'
    },
  },
  closeIconColor: {
    description: 'The color for the close icon element',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions(),
    },
  },
  closeIconColorVariant: {
    description: 'The name of the color variant to apply on close icon elements',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
  extraAction: {
    description: 'An additional button to be shown before the close button',
    control: {
      type: 'null'
    },
  },
  icon: {
    description: 'The icon to be used, should be used a IconDefinition from @fortawesome/fontawesome-svg-core',
    control: {
      type: 'null'
    },
  },
  iconColor: {
    description: 'The color for the icon element',
    control: {
      type: 'color',
      presetColors: getThemeColorOptions(),
    },
  },
  iconColorVariant: {
    description: 'The name of the color variant to apply on icon elements',
    options: getThemeColorVariantOptions(),
    control: {
      type: 'select'
    },
  },
  onClose: {
    description: 'The callback to be called when the close button is pressed',
    control: {
      type: 'null'
    },
  },
  severity: {
    description: 'The severity for the alert, by default is info',
    options: [undefined, 'error', 'info', 'success', 'warning'],
    control: {
      type: 'select'
    },
  },
  variant: {
    description: 'The variant for the box element',
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tAlert.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  }
}, ColorControls), ColorVariantControls), _objectWithoutProperties(BoxExtendedControls !== null &&
  BoxExtendedControls !== void 0 ? BoxExtendedControls : {}, ['variant']));
export default AlertControls;
