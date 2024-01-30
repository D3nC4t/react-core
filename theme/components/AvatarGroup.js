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
var getVariantStyles = function(variant) {
  var _a;
  var baseClassName = "C4tAvatar-".concat(variant);
  switch (variant) {
    case 'contained':
    case 'round-contained':
    case 'square-contained':
      return {
        '& > *': (_a = {},
          _a["& .".concat(baseClassName)] = {
            '&--alt, &--img': {
              border: function(theme, props) {
                var _a, _b, _c, _d, _e;
                return theme.get.border((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit, (_c = props
                    .$bShape) !== null && _c !== void 0 ? _c : theme.shape.border.shape, (_d = props.$bColor) !==
                  null && _d !== void 0 ? _d : 'primary', (_e = props.$bColorVariant) !== null && _e !== void 0 ?
                  _e : 'dark');
              },
              height: function(theme, props) {
                var _a, _b;
                return 'calc(100%' +
                  " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape
                      .border.size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border
                    .unit), ")");
              },
              width: function(theme, props) {
                var _a, _b;
                return 'calc(100%' +
                  " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape
                      .border.size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border
                    .unit), ")");
              },
            },
          },
          _a),
      };
    case 'dashed':
    case 'round-dashed':
    case 'square-dashed':
    case 'dotted':
    case 'round-dotted':
    case 'square-dotted':
    case 'outlined':
    case 'round-outlined':
    case 'square-outlined':
    case 'shadowed':
    case 'round-shadowed':
    case 'square-shadowed':
      return {
        '& > *': {
          backgroundColor: function(theme, props) {
            var _a, _b;
            return theme.get.color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', (_b = props
              .$bColorVariant) !== null && _b !== void 0 ? _b : 'text');
          },
        },
      };
    default:
      return {};
  }
};
var AvatarGroup = {
  C4tAvatarGroup: {
    defaultProps: {},
    variants: {
      'root': {
        styles: __assign({
          '& > *': {
            marginLeft: '-0.5rem',
          }
        }, makeVariants(['root', 'dashed', 'dotted', 'outlined', 'shadowed'], function(variant) {
          var _a;
          var className = "C4tAvatar-".concat(variant, "--box");
          return _a = {},
            _a["& .".concat(className)] = {
              backgroundColor: function(theme, props) {
                var _a, _b;
                return theme.get.color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', (_b =
                  props.$bColorVariant) !== null && _b !== void 0 ? _b : 'text');
              },
              '& > *': {
                color: function(theme, props) {
                  var _a, _b;
                  return theme.get.color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', (
                    _b = props.$bColorVariant) !== null && _b !== void 0 ? _b : 'main') + ' !important';
                },
              },
            },
            _a;
        })),
      },
      'contained': {
        styles: getVariantStyles('contained'),
      },
      'round-contained': {
        styles: getVariantStyles('round-contained'),
      },
      'square-contained': {
        styles: getVariantStyles('square-contained'),
      },
      'dashed': {
        styles: getVariantStyles('dashed'),
      },
      'round-dashed': {
        styles: getVariantStyles('dashed'),
      },
      'square-dashed': {
        styles: getVariantStyles('dashed'),
      },
      'dotted': {
        styles: getVariantStyles('dotted'),
      },
      'round-dotted': {
        styles: getVariantStyles('dotted'),
      },
      'square-dotted': {
        styles: getVariantStyles('dotted'),
      },
      'outlined': {
        styles: getVariantStyles('outlined'),
      },
      'round-outlined': {
        styles: getVariantStyles('outlined'),
      },
      'square-outlined': {
        styles: getVariantStyles('outlined'),
      },
      'shadowed': {
        styles: getVariantStyles('shadowed'),
      },
      'round-shadowed': {
        styles: getVariantStyles('shadowed'),
      },
      'square-shadowed': {
        styles: getVariantStyles('shadowed'),
      },
    },
  },
};
export default AvatarGroup;
