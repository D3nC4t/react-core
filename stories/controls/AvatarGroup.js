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
  DefaultC4tControls
} from './default';
var AvatarGroupControls = __assign(__assign({
  children: {
    description: 'The children for the AvatarGroup element, should be a list of Avatar elements',
    control: {
      type: 'null'
    },
  },
  flipContent: {
    description: 'If the content should be flipped, ltr or rtl',
    control: {
      type: 'boolean'
    },
  },
  max: {
    description: 'The maximum number of avatars to be shown in the group',
    control: {
      type: 'number'
    },
  },
  renderSurplus: {
    description: 'The function to be used to render the surplus Avatar',
    control: {
      type: 'null'
    },
  },
  total: {
    description: 'The total number of avatars in the group,' +
      ' use it when the count of avatars is greater than the max',
    control: {
      type: 'number'
    },
  },
  variant: {
    description: 'The variant for the AvatarGroup element',
    options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tAvatarGroup.variants) !== null && _a !== void 0 ? _a : {}),
      true),
    control: {
      type: 'select'
    },
  }
}, DefaultC4tControls), _objectWithoutProperties(BoxExtendedControls !== null && BoxExtendedControls !== void 0 ?
  BoxExtendedControls : {}, ['variant']));
export default AvatarGroupControls;
