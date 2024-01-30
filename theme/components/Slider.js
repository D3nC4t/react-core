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
import makeVariants from '../../theme/utils/makeVariants';
var Slider = {
  C4tSlider: {
    defaultProps: {},
    variants: {
      'root': {
        styles: __assign({
          height: function(theme) {
            return theme.get.rem(theme.spacing.xs + theme.spacing.xxs, theme.shape.unit);
          },
          padding: function(theme) {
            return "".concat(theme.get.rem((theme.spacing.s + theme.spacing.xxs) * 2, theme.shape.unit),
              " 0 0 0");
          }
        }, makeVariants(['root', 'contained', 'dashed', 'dotted', 'outlined', 'shadowed'], function(variant) {
          var _a, _b;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark': (_b = {
                  cursor: 'pointer',
                  '&__text': {
                    display: 'none',
                    color: function(theme, props) {
                      var _a;
                      return theme.get
                        .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'dark');
                    },
                    position: 'absolute',
                    left: function(theme) {
                      return "calc(50% - ".concat(theme.get
                        .rem(theme.spacing.xxs, theme.shape.unit), ")");
                    },
                    bottom: function(theme) {
                      return theme.get.rem(theme.spacing.sm - theme.spacing.xxs, theme.shape.unit);
                    },
                    transform: 'translateX(-50%)',
                    '&.in-range': {
                      display: 'block',
                    },
                  }
                },
                _b["&:hover > .C4tSlider-".concat(variant, "--mark__text")] = {
                  display: 'block',
                },
                _b['&:after'] = {
                  color: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  content: '"\\00B7"',
                  width: function(theme) {
                    return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                  },
                },
                _b['&.hide-mark:after'] = {
                  color: 'transparent',
                },
                _b['.disabled &:after'] = {
                  color: 'pink',
                },
                _b),
              '&--rail, &--track': {
                cursor: 'pointer',
                borderRadius: function(theme) {
                  return theme.get.rem(theme.shape.border.radius, theme.shape.border.unit);
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs + theme.spacing.xxs, theme.shape.unit);
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                },
                left: 0,
                width: '100%',
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'main');
                },
                left: 0,
                '&:after': {
                  aspectRatio: '1 / 1',
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  border: function(theme, props) {
                    var _a;
                    return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                      .border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'main'
                      );
                  },
                  borderRadius: '50%',
                  content: '""',
                  cursor: 'pointer',
                  height: 'auto',
                  position: 'absolute',
                  right: function(theme) {
                    return theme.get.rem(-theme.spacing.xs, theme.shape.unit);
                  },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: function(theme) {
                    return theme.get.rem(theme.spacing.s, theme.shape.unit);
                  },
                },
              },
            },
            _a);
        })),
      },
      'contained': {
        styles: __assign({}, makeVariants(['contained'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark:after': {
                color: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'main');
                },
                '&:after': {
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                  },
                },
              },
            },
            _a);
        })),
      },
      'dashed': {
        styles: __assign({}, makeVariants(['dashed'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark:after': {
                color: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'dark');
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_a =
                    props.color) !== null && _a !== void 0 ? _a : 'primary', 'main');
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_a =
                    props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
                '&:after': {
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  border: function(theme, props) {
                    var _a;
                    return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (
                      _a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                  },
                },
              },
            },
            _a);
        })),
      },
      'dotted': {
        styles: __assign({}, makeVariants(['dotted'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark:after': {
                color: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'dark');
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_a =
                    props.color) !== null && _a !== void 0 ? _a : 'primary', 'main');
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_a =
                    props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
                '&:after': {
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  border: function(theme, props) {
                    var _a;
                    return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (
                      _a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker');
                  },
                },
              },
            },
            _a);
        })),
      },
      'outlined': {
        styles: __assign({}, makeVariants(['outlined'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark:after': {
                color: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'dark');
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'main');
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                border: function(theme, props) {
                  var _a;
                  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'darker'
                    );
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
                '&:after': {
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  border: function(theme, props) {
                    var _a;
                    return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                      .border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                      'darker');
                  },
                },
              },
            },
            _a);
        })),
      },
      'shadowed': {
        styles: __assign({}, makeVariants(['shadowed'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tSlider-".concat(variant)] = {
              '&--mark:after': {
                color: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'dark');
                },
              },
              '&--rail': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                boxShadow: function(theme, props) {
                  var _a;
                  return theme.get.shadow(__assign(__assign({}, theme.shadow.topRight), {
                    color: theme.get.rgba((_a = props.color) !== null && _a !== void 0 ? _a :
                      'primary', 0.4, 'text')
                  }));
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
              },
              '&--track': {
                backgroundColor: function(theme, props) {
                  var _a;
                  return theme.get
                    .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                },
                boxShadow: function(theme, props) {
                  var _a;
                  return theme.get.shadow(__assign(__assign({}, theme.shadow.topRight), {
                    color: theme.get.rgba((_a = props.color) !== null && _a !== void 0 ? _a :
                      'primary', 0.4, 'darker')
                  }));
                },
                height: function(theme) {
                  return theme.get.rem(theme.spacing.xs, theme.shape.unit);
                },
                '&:after': {
                  backgroundColor: function(theme, props) {
                    var _a;
                    return theme.get
                      .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                  },
                  border: 'none',
                  boxShadow: function(theme, props) {
                    var _a;
                    return theme.get.shadow(__assign(__assign({}, theme.shadow.topRight), {
                      color: theme.get.rgba((_a = props.color) !== null && _a !== void 0 ? _a :
                        'primary', 0.2, 'darker')
                    }));
                  },
                },
              },
            },
            _a);
        })),
      },
    },
  },
};
export default Slider;
