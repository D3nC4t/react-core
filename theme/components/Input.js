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
import makeVariants from '../../theme/utils/makeVariants';
var Input = {
  C4tInput: {
    defaultProps: {
      boxProps: {
        jCss: __assign({
          position: 'relative',
          padding: 0,
          flexWrap: 'nowrap',
          gap: 0,
          width: function(theme, props) {
            var _a;
            return theme.get.rem((_a = props.width) !== null && _a !== void 0 ? _a : 128, 'px');
          }
        }, makeVariants([
          'root',
          'contained',
          'dashed',
          'dotted',
          'outlined',
          'round-contained',
          'round-outlined',
          'rounded',
          'shadowed',
        ], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tInput-".concat(variant, "__start-adornment, & .C4tInput-").concat(variant,
              "__end-adornment")] = {
              position: 'absolute',
              '& *': {
                color: function(theme, props) {
                  var _a;
                  return theme.get.color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                    'main');
                },
              },
              '&:hover *': {
                color: function(theme, props) {
                  var _a;
                  return theme.get.color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                    'darker');
                },
              },
            },
            _a["& .C4tInput-".concat(variant, "__start-adornment")] = {
              left: 0,
            },
            _a["& .C4tInput-".concat(variant, "__end-adornment")] = {
              right: 0,
            },
            _a);
        })),
      },
    },
    variants: {
      'root': {
        styles: function(_a) {
          var _b, _c, _d;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return (__assign({
            backgroundColor: 'inherit',
            border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
              .shape, 'transparent'),
            borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
              .border.shape, (_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
            fontFamily: theme.typography.fontFamily,
            flexGrow: 1,
            minWidth: 0,
            padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit, " ").concat(theme.spacing.xs)
              .concat(theme.shape.unit),
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '&[type="number"]': {
              MozAppearance: 'textfield',
            },
            '&:focus': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                .border.shape, (_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'darker'),
              outline: 'none',
            },
            '&:focus-visible': {
              outline: "".concat(theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d :
                'primary', 'darker'), " solid 1px"),
              outlineOffset: theme.get.rem(theme.spacing.xxs, theme.shape.unit),
            },
            '&:invalid, .invalid &': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                .border.shape, 'error', 'main'),
              color: theme.get.color('error', 'main'),
            },
            '&:disabled, &:disabled:hover': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                .border.shape, 'grey', 'lighter'),
              color: theme.get.color('grey', 'lighter'),
            }
          }, theme.typography.variants.p.defaultStyles));
        },
      },
      'contained': {
        props: {
          boxProps: {
            jCss: __assign({}, makeVariants(['contained'], function(variant) {
              var _a;
              return (_a = {},
                _a["& .C4tInput-".concat(variant, "__start-adornment") +
                  ", & .C4tInput-".concat(variant, "__end-adornment")] = {
                  '& *': {
                    color: function(theme, props) {
                      var _a;
                      return theme.get.color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                        'text');
                    },
                  },
                },
                _a);
            })),
          },
        },
        styles: function(_a) {
          var _b, _c, _d, _e, _f;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            backgroundColor: theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary',
              'main'),
            borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
              .shape, (_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'text'),
            color: theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'text'),
            '&:hover, &:focus': {
              backgroundColor: theme.get.color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary',
                'dark'),
            },
            '&:invalid, .invalid &': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                .border.shape, props.color === 'error' ? 'dark' : 'error', 'main'),
              color: function(theme, props) {
                return theme.get.color(props.color === 'error' ? 'dark' : 'error', 'main');
              },
            },
            '&:disabled, &:disabled:hover': {
              backgroundColor: theme.get.color('grey', 'lighter'),
              color: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary', 'text'),
            },
          });
        },
      },
      'dashed': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_b =
              props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
            '&:hover, &:focus': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_c =
                props.color) !== null && _c !== void 0 ? _c : 'primary', 'darker'),
            },
            '&:invalid, .invalid &': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed',
                'error', 'main'),
            },
            '&:disabled, &:disabled:hover': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', 'grey',
                'lighter'),
            },
          });
        },
      },
      'dotted': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_b =
              props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
            '&:hover, &:focus': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_c =
                props.color) !== null && _c !== void 0 ? _c : 'primary', 'darker'),
            },
            '&:invalid, .invalid &': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted',
                'error', 'main'),
            },
            '&:disabled, &:disabled:hover': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', 'grey',
                'lighter'),
            },
          });
        },
      },
      'outlined': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
              (_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
            '&:hover, &:focus': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, (_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'darker'),
            },
            '&:invalid, .invalid &': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, 'error', 'main'),
            },
            '&:disabled, &:disabled:hover': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, 'grey', 'lighter'),
            },
          });
        },
      },
      'round-contained': {
        props: {
          boxProps: {
            jCss: __assign({}, makeVariants(['round-contained'], function(variant) {
              var _a;
              return (_a = {},
                _a["& .C4tInput-".concat(variant, "__start-adornment") +
                  ", & .C4tInput-".concat(variant, "__end-adornment")] = {
                  '& *': {
                    color: function(theme, props) {
                      var _a;
                      return theme.get.color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                        'text');
                    },
                  },
                },
                _a);
            })),
          },
        },
        styles: function(_a) {
          var _b, _c, _d, _e, _f;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            backgroundColor: theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary',
              'main'),
            borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
              .shape, (_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'text'),
            borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
            color: theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'text'),
            '&:hover, &:focus': {
              backgroundColor: theme.get.color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary',
                'dark'),
            },
            '&:invalid, .invalid &': {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                .border.shape, props.color === 'error' ? 'dark' : 'error', 'main'),
              color: function(theme, props) {
                return theme.get.color(props.color === 'error' ? 'dark' : 'error', 'main');
              },
            },
            '&:disabled, &:disabled:hover': {
              backgroundColor: theme.get.color('grey', 'lighter'),
              color: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary', 'text'),
            },
          });
        },
      },
      'round-outlined': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
              (_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
            borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
            '&:hover, &:focus': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, (_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'darker'),
            },
            '&:invalid, .invalid &': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, 'error', 'main'),
            },
            '&:disabled, &:disabled:hover': {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, 'grey', 'lighter'),
            },
          });
        },
      },
      'rounded': {
        styles: function(_a) {
          var theme = _a.theme;
          return ({
            borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
          });
        },
      },
      'shadowed': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            border: 'none',
            borderBottom: 'none',
            boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
              color: theme.get.rgba((_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 0.2,
                'main')
            })),
            '&:hover, &:focus': {
              border: 'none',
              borderBottom: 'none',
              boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                color: theme.get.rgba((_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 0.2,
                  'darker')
              })),
            },
            '&:invalid, .invalid &': {
              border: 'none',
              borderBottom: 'none',
              boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                color: theme.get.rgba('error', 0.2, 'main')
              })),
            },
            '&:disabled, &:disabled:hover': {
              border: 'none',
              borderBottom: 'none',
              boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                color: theme.get.rgba('grey', 0.2, 'main')
              })),
            },
          });
        },
      },
    },
  },
};
export default Input;
