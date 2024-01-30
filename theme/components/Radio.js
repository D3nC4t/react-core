var __rest = (this && this.__rest) || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import {
  faCircle,
  faCircleCheck,
  faCircleDot,
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons';
import {
  faCircle as faSolidCircle,
  faCircleCheck as faSolidCircleCheck,
  faCircleDot as faSolidCircleDot,
  faCircleXmark as faSolidCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
var Radio = {
  C4tRadio: {
    defaultProps: {
      $bColor: 'transparent',
    },
    variants: {
      'root': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClassName = "".concat(props.name, "-").concat(props.variant);
          return _b = {
              padding: theme.get.rem(theme.spacing.xs)
            },
            _b["& .".concat(baseClassName, "--input")] = {
              position: 'relative',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              width: theme.get.rem(theme.spacing.sm, theme.shape.unit),
              height: theme.get.rem(theme.spacing.sm, theme.shape.unit),
              borderRadius: '50%',
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (
                _d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'main'),
              margin: 0,
              '&:checked': {
                backgroundColor: theme.get.color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary',
                  'main'),
              },
              '&:disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'grey', 'lighter'),
                '&:checked': {
                  backgroundColor: theme.get.color('grey', 'lighter'),
                },
              },
            },
            _b["& .".concat(baseClassName, "--input__icon")] = {
              '&.disabled': {
                color: theme.get.color('grey', 'lighter'),
              }
            },
            _b['&.invalid'] = (_c = {},
              _c["& .".concat(baseClassName, "--input:not(:disabled)")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'error', 'main'),
                '&:checked': {
                  backgroundColor: theme.get.color('error', 'main'),
                },
              },
              _c["& .".concat(baseClassName, "--input__icon")] = {
                color: theme.get.color('error', 'main'),
              },
              _c),
            _b;
        },
      },
      'contained': {
        props: {
          checkedIcon: faSolidCircleDot,
          uncheckedIcon: faSolidCircle,
        },
        styles: {},
      },
      'contained-checkmark': {
        props: {
          checkedIcon: faSolidCircleCheck,
          uncheckedIcon: faSolidCircle,
        },
        styles: {},
      },
      'contained-cross': {
        props: {
          checkedIcon: faSolidCircleXmark,
          uncheckedIcon: faSolidCircle,
        },
        styles: {},
      },
      'outlined': {
        props: {
          checkedIcon: faCircleDot,
          uncheckedIcon: faCircle,
        },
        styles: {},
      },
      'outlined-checkmark': {
        props: {
          checkedIcon: faCircleCheck,
          uncheckedIcon: faCircle,
        },
        styles: {},
      },
      'outlined-cross': {
        props: {
          checkedIcon: faCircleXmark,
          uncheckedIcon: faCircle,
        },
        styles: {},
      },
    },
  },
};
export default Radio;
