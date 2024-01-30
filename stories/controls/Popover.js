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
import PortalControls from './Portal';
var PopoverControls = __assign({
    onEntering: {
      description: 'Callback fired before the Popover enters the DOM tree',
      control: {
        type: 'null'
      },
    },
    variant: {
      description: 'The variant for the Popover element',
      options: __spreadArray([
        undefined
      ], Object.keys((_a = appTheme.components.C4tPopover.variants) !== null && _a !== void 0 ? _a : {}), true),
      control: {
        type: 'select'
      },
    },
    $anchorEl: {
      description: 'The DOM element used to set the position of the Popover',
      control: {
        type: 'null'
      },
    },
    $anchorOrigin: {
      description: 'The anchor origin for the Popover element, vertical and horizontal in pixels without the unit',
      control: {
        type: 'object'
      },
    },
    $anchorPosition: {
      description: 'The anchor position for the Popover element, left and top in pixels without the unit',
      control: {
        type: 'object'
      },
    },
    $marginThreshold: {
      description: 'The margin threshold for the Popover element, should be a number in pixels without the unit',
      control: {
        type: 'object'
      },
    },
    $position: {
      description: 'The position for the Popover element',
      options: [
        undefined, 'absolute', 'fixed', 'relative', 'static', 'inherit', 'initial'
      ],
      control: {
        type: 'select'
      },
    },
    $transformOrigin: {
      description: 'The transform origin for the Popover element, vertical and horizontal in pixels without the unit',
      control: {
        type: 'object'
      },
    }
  }, _objectWithoutProperties(PortalControls !== null && PortalControls !== void 0 ? PortalControls : {}, [
  'variant']));
export default PopoverControls;
