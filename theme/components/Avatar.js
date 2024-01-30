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
import {
  merge
} from 'lodash';
import makeVariants from '../../theme/utils/makeVariants';
var getVariantStyles = function(variant) {
  var _a, _b, _c, _d, _e;
  var baseClassName = "C4tAvatar-".concat(variant);
  switch (variant) {
    case 'contained':
    case 'round-contained':
    case 'square-contained':
      return _a = {},
        _a["& .".concat(baseClassName)] = {
          '&--alt, &--img': {
            backgroundColor: function(theme, props) {
              var _a, _b;
              return theme.get
                .color((_a = props.$bgColor) !== null && _a !== void 0 ? _a : 'primary', (_b = props
                  .$bgColorVariant) !== null && _b !== void 0 ? _b : 'main');
            },
            color: function(theme, props) {
              var _a;
              return theme.get
                .color((_a = props.$bgColor) !== null && _a !== void 0 ? _a : 'primary', 'text');
            },
          }
        },
        _a;
    case 'dashed':
    case 'round-dashed':
    case 'square-dashed':
      return _b = {},
        _b["& .".concat(baseClassName)] = {
          '&--alt, &--img': {
            border: function(theme, props) {
              var _a, _b, _c, _d, _e;
              return theme.get
                .border((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border.size, (_b = props
                    .$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit, (_c = props.$bShape) !==
                  null && _c !== void 0 ? _c : 'dashed', (_d = props.$bColor) !== null && _d !== void 0 ? _d :
                  'primary', (_e = props.$bColorVariant) !== null && _e !== void 0 ? _e : 'main');
            },
            color: function(theme, props) {
              var _a;
              return theme.get
                .color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', 'main');
            },
            height: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
            width: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
          },
        },
        _b;
    case 'dotted':
    case 'round-dotted':
    case 'square-dotted':
      return _c = {},
        _c["& .".concat(baseClassName)] = {
          '&--alt, &--img': {
            border: function(theme, props) {
              var _a, _b, _c, _d, _e;
              return theme.get
                .border((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border.size, (_b = props
                    .$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit, (_c = props.$bShape) !==
                  null && _c !== void 0 ? _c : 'dotted', (_d = props.$bColor) !== null && _d !== void 0 ? _d :
                  'primary', (_e = props.$bColorVariant) !== null && _e !== void 0 ? _e : 'main');
            },
            color: function(theme, props) {
              var _a;
              return theme.get
                .color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', 'main');
            },
            height: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
            width: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
          },
        },
        _c;
    case 'outlined':
    case 'round-outlined':
    case 'square-outlined':
      return _d = {},
        _d["& .".concat(baseClassName)] = {
          '&--alt, &--img': {
            border: function(theme, props) {
              var _a, _b, _c, _d, _e;
              return theme.get
                .border((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border.size, (_b = props
                    .$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit, (_c = props.$bShape) !==
                  null && _c !== void 0 ? _c : theme.shape.border.shape, (_d = props.$bColor) !== null && _d !==
                  void 0 ? _d : 'primary', (_e = props.$bColorVariant) !== null && _e !== void 0 ? _e : 'main');
            },
            color: function(theme, props) {
              var _a;
              return theme.get
                .color((_a = props.$bColor) !== null && _a !== void 0 ? _a : 'primary', 'main');
            },
            height: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
            width: function(theme, props) {
              var _a, _b;
              return 'calc(100%' +
                " - ".concat(theme.get.rem(((_a = props.$bSize) !== null && _a !== void 0 ? _a : theme.shape.border
                  .size) * 2, (_b = props.$bUnit) !== null && _b !== void 0 ? _b : theme.shape.border.unit), ")");
            },
          },
        },
        _d;
    case 'shadowed':
    case 'round-shadowed':
    case 'square-shadowed':
      return _e = {},
        _e["& .".concat(baseClassName)] = {
          '&--alt, &--img': {
            boxShadow: function(theme, props) {
              var _a;
              return theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
                color: theme.get.rgba((_a = props.$bgColor) !== null && _a !== void 0 ? _a : 'primary', 0.2,
                  'main')
              }));
            },
            color: function(theme, props) {
              var _a;
              return theme.get
                .color((_a = props.$bgColor) !== null && _a !== void 0 ? _a : 'primary', 'main');
            },
          }
        },
        _e;
    default:
      return {};
  }
};
var Avatar = function(theme) {
  return ({
    C4tAvatar: {
      defaultProps: {
        boxProps: {
          jCss: __assign({
            alignItems: 'center',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
            width: theme.get.rem(26)
          }, makeVariants([
            'root', 'contained', 'dashed', 'dotted', 'outlined', 'shadowed',
            'round-contained', 'round-dashed', 'round-dotted',
            'round-outlined', 'round-root', 'round-shadowed',
            'square-contained', 'square-dashed', 'square-dotted',
            'square-outlined', 'square-root', 'square-shadowed',
          ], function(variant) {
            var _a;
            return (_a = {},
              _a["& .C4tAvatar-".concat(variant, "--alt, & .C4tAvatar-").concat(variant, "--img")] =
              __assign({
                alignItems: 'center',
                borderRadius: 'inherit',
                color: theme.get.color('white', 'text'),
                display: 'flex',
                fontFamily: theme.typography.fontFamily,
                justifyContent: 'center',
                height: '100%',
                width: '100%'
              }, theme.typography.variants.caption.defaultStyles),
              _a);
          })),
        },
      },
      variants: {
        'root': {
          styles: {
            border: 'none',
            borderRadius: '50%',
            height: '100%',
            objectFit: 'cover',
            width: '100%',
          },
        },
        'square-root': {
          props: {
            boxProps: {
              jCss: {
                borderRadius: 0,
              },
            },
          },
          styles: {},
        },
        'round-root': {
          props: {
            boxProps: {
              jCss: {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              },
            },
          },
          styles: {},
        },
        'contained': {
          props: {
            boxProps: {
              jCss: getVariantStyles('contained'),
            },
          },
          styles: {},
        },
        'round-contained': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('round-contained'), {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              }),
            },
          },
          styles: {},
        },
        'square-contained': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('square-contained'), {
                borderRadius: 0,
              }),
            },
          },
          styles: {},
        },
        'dashed': {
          props: {
            boxProps: {
              jCss: getVariantStyles('dashed'),
            },
          },
          styles: {},
        },
        'round-dashed': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('round-dashed'), {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              }),
            },
          },
          styles: {},
        },
        'square-dashed': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('square-dashed'), {
                borderRadius: 0,
              }),
            },
          },
          styles: {},
        },
        'dotted': {
          props: {
            boxProps: {
              jCss: getVariantStyles('dotted'),
            },
          },
          styles: {},
        },
        'round-dotted': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('round-dotted'), {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              }),
            },
          },
          styles: {},
        },
        'square-dotted': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('square-dotted'), {
                borderRadius: 0,
              }),
            },
          },
          styles: {},
        },
        'outlined': {
          props: {
            boxProps: {
              jCss: getVariantStyles('outlined'),
            },
          },
          styles: {},
        },
        'round-outlined': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('round-outlined'), {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              }),
            },
          },
          styles: {},
        },
        'square-outlined': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('square-outlined'), {
                borderRadius: 0,
              }),
            },
          },
          styles: {},
        },
        'shadowed': {
          props: {
            boxProps: {
              jCss: getVariantStyles('shadowed'),
            },
          },
          styles: {},
        },
        'round-shadowed': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('round-shadowed'), {
                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
              }),
            },
          },
          styles: {},
        },
        'square-shadowed': {
          props: {
            boxProps: {
              jCss: merge(getVariantStyles('square-shadowed'), {
                borderRadius: 0,
              }),
            },
          },
          styles: {},
        },
      },
    },
  });
};
export default Avatar;
