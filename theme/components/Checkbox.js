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
  faSquare,
  faSquareCheck,
  faSquareMinus,
  faSquarePlus
} from '@fortawesome/free-regular-svg-icons';
import {
  faSquare as faSolidSquare,
  faSquareCheck as faSolidSquareCheck,
  faSquareMinus as faSolidSquareMinus,
  faSquarePlus as faSolidSquarePlus,
  faSquareXmark as faSolidSquareXmark
} from '@fortawesome/free-solid-svg-icons';
var Checkbox = {
  C4tCheckbox: {
    defaultProps: {
      $bColor: 'transparent',
    },
    variants: {
      'root': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f;
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
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (
                _d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'main'),
              margin: 0,
              '&:checked': {
                backgroundColor: theme.get.color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary',
                  'main'),
                '&:after': {
                  color: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary', 'text'),
                  content: '"\\2713"',
                  padding: "0 ".concat(theme.get.rem(theme.spacing.xxs, theme.shape.unit)),
                  position: 'absolute',
                  top: theme.get.rem(-theme.spacing.xxs / 2, theme.shape.unit),
                  left: 0,
                },
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
      'contained-plus': {
        props: {
          checkedIcon: faSolidSquarePlus,
          uncheckedIcon: faSolidSquare,
        },
        styles: {},
      },
      'contained-checkmark': {
        props: {
          checkedIcon: faSolidSquareCheck,
          uncheckedIcon: faSolidSquare,
        },
        styles: {},
      },
      'contained-cross': {
        props: {
          checkedIcon: faSolidSquareXmark,
          uncheckedIcon: faSolidSquare,
        },
        styles: {},
      },
      'contained-minus': {
        props: {
          checkedIcon: faSolidSquareMinus,
          uncheckedIcon: faSolidSquare,
        },
        styles: {},
      },
      'outlined-plus': {
        props: {
          checkedIcon: faSquarePlus,
          uncheckedIcon: faSquare,
        },
        styles: {},
      },
      'outlined-checkmark': {
        props: {
          checkedIcon: faSquareCheck,
          uncheckedIcon: faSquare,
        },
        styles: {},
      },
      'outlined-minus': {
        props: {
          checkedIcon: faSquareMinus,
          uncheckedIcon: faSquare,
        },
        styles: {},
      },
    },
  },
};
export default Checkbox;
