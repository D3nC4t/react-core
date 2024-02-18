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
var alertBorder = function(theme, props) {
  var _a, _b, _c, _d, _e, _f, _g;
  return theme.get.border((_a = props.$bSize) !== null && _a !== void 0 ? _a : (theme.shape.border.size * 2), (_b =
      props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit, (_c = props.$bShape) !== null &&
    _c !== void 0 ? _c : theme.shape.border.shape, (_f = (_e = (_d = props.$bColor) !== null && _d !== void 0 ? _d :
      props.color) !== null && _e !== void 0 ? _e : props.severity) !== null && _f !== void 0 ? _f : 'info', (_g =
      props.$bColorVariant) !== null && _g !== void 0 ? _g : 'lighter');
};
var Alert = {
  C4tAlert: {
    defaultProps: {
      severity: 'info',
    },
    variants: {
      'root': {
        styles: __assign({
          backgroundColor: function(theme, props) {
            var _a, _b, _c, _d;
            return theme.get.color((_c = (_b = (_a = props.$bgColor) !== null && _a !== void 0 ? _a : props
                .color) !== null && _b !== void 0 ? _b : props.severity) !== null && _c !== void 0 ? _c :
              'info', (_d = props.$bgColorVariant) !== null && _d !== void 0 ? _d : 'darker');
          },
          border: alertBorder,
          color: function(theme, props) {
            var _a, _b, _c;
            var color = (_b = (_a = props.color) !== null && _a !== void 0 ? _a : props.severity) !== null &&
              _b !== void 0 ? _b : 'info';
            var variant = color === 'black' ? 'text' : 'lighter';
            return theme.get.color(color, (_c = props.colorVariant) !== null && _c !== void 0 ? _c : variant);
          },
          gap: function(theme) {
            return theme.get.rem(theme.spacing.xs, theme.shape.unit);
          },
          position: 'relative'
        }, makeVariants(['root', 'contained', 'outlined', 'shadowed'], function(variant) {
          var _a;
          return (_a = {},
            _a["& .C4tAlert-".concat(variant, "--icon")] = {
              height: function(theme) {
                return theme.get.rem(theme.spacing.m, theme.shape.unit);
              },
              width: function(theme) {
                return theme.get.rem(theme.spacing.m, theme.shape.unit);
              },
            },
            _a["& .C4tAlert-".concat(variant, "--text")] = {
              paddingLeft: function(theme) {
                return theme.get.rem(theme.spacing.s, theme.shape.unit);
              },
            },
            _a);
        })),
      },
      'contained': {
        styles: {
          backgroundColor: function(theme, props) {
            var _a, _b, _c, _d;
            return theme.get.color((_c = (_b = (_a = props.$bgColor) !== null && _a !== void 0 ? _a : props
                .color) !== null && _b !== void 0 ? _b : props.severity) !== null && _c !== void 0 ? _c : 'info',
              (_d = props.$bgColorVariant) !== null && _d !== void 0 ? _d : 'lighter');
          },
          border: alertBorder,
          color: function(theme, props) {
            var _a, _b, _c;
            var color = (_b = (_a = props.color) !== null && _a !== void 0 ? _a : props.severity) !== null && _b !==
              void 0 ? _b : 'info';
            var variant = color === 'black' ? 'text' : 'darker';
            return theme.get.color(color, (_c = props.colorVariant) !== null && _c !== void 0 ? _c : variant);
          },
        },
      },
      'outlined': {
        styles: {
          border: alertBorder,
        },
      },
      'shadowed': {
        styles: {
          boxShadow: function(theme, props) {
            var _a, _b, _c, _d;
            return theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
              color: theme.get.rgba(((_c = (_b = (_a = props.$bgColor) !== null && _a !== void 0 ? _a : props
                  .color) !== null && _b !== void 0 ? _b : props.severity) !== null && _c !== void 0 ?
                _c : 'info'), 0.4, (_d = props.$bgColorVariant) !== null && _d !== void 0 ? _d : 'darker')
            }));
          },
        },
      },
    },
  },
};
export default Alert;
