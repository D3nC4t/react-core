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
  ColorControls,
  ColorVariantControls
} from './color';
import {
  DefaultC4tControls
} from './default';
var SelectControls = __assign(__assign(__assign({
  boxProps: {
    description: 'The props to pass to the box component',
    control: {
      type: 'object'
    },
  },
  children: {
    description: 'The children of the select component, should be a list of options with a key on each of them',
    control: {
      type: 'none'
    },
  },
  closeIcon: {
    description: 'The icon to show to collapse the select options',
    control: {
      type: 'none'
    },
  },
  disabled: {
    description: 'If the select should be disabled',
    control: {
      type: 'boolean'
    },
  },
  excludeKeys: {
    description: 'The list of keys to exclude from the options, use this to add non selectable options',
    control: {
      type: 'null'
    },
  },
  inputName: {
    description: 'The name of the hidden input',
    control: {
      type: 'text'
    },
  },
  intlModule: {
    description: 'The module to use for translations',
    control: {
      type: 'text'
    },
  },
  invalid: {
    description: 'If the select should be marked as invalid',
    control: {
      type: 'boolean'
    },
  },
  multiple: {
    description: 'If the select should allow multiple options to be selected',
    control: {
      type: 'boolean'
    },
  },
  onChange: {
    description: 'The callback function to call when the value of the select changes',
    control: {
      type: 'none'
    },
  },
  openIcon: {
    description: 'The icon to show to expand the select options',
    control: {
      type: 'none'
    },
  },
  optionsJCss: {
    description: 'The CSS in js for options list element, the popover element',
    control: {
      type: 'object'
    },
  },
  paperVariant: {
    options: __spreadArray([
      undefined
    ], Object.keys((_a = appTheme.components.C4tPaper.variants) !== null && _a !== void 0 ? _a : {}), true),
    control: {
      type: 'select'
    },
  },
  usePopover: {
    description: 'If the select should use a popover to show the options',
    control: {
      type: 'boolean'
    },
  },
  value: {
    description: 'The value of the select, if multiple should be an array of keys',
    control: {
      type: 'none'
    },
  },
  variant: {
    description: 'The variant for the select element',
    options: __spreadArray([
      undefined
    ], Object.keys((_b = appTheme.components.C4tSelect.variants) !== null && _b !== void 0 ? _b : {}), true),
    control: {
      type: 'select'
    },
  },
  width: {
    description: 'The width for the select',
    control: {
      type: 'number'
    },
  }
}, DefaultC4tControls), ColorControls), ColorVariantControls);
export default SelectControls;
