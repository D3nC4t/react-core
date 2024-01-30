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
var ProgressBar = {
  C4tProgressBar: {
    defaultProps: {},
    variants: {
      'root': {
        styles: function(_a) {
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return (__assign({}, makeVariants(['root', 'contained', 'dashed', 'dotted', 'outlined'], function(
          variant) {
            var _a, _b, _c;
            var _d, _e, _f, _g, _h;
            var baseClass = "C4tProgressBar-".concat(variant);
            return _a = {},
              _a["&.".concat(baseClass)] = (_b = {
                  width: '100%',
                  height: theme.get.rem(theme.spacing.ml + theme.spacing.xxs, theme.shape.unit),
                  position: 'relative',
                  padding: 0
                },
                _b["& .".concat(baseClass, "--title")] = {
                  marginRight: theme.get.rem(theme.spacing.xxl, theme.shape.unit),
                },
                _b["& .".concat(baseClass, "--track")] = {
                  position: 'absolute',
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d :
                      'primary', 'lighter')),
                  borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
                  bottom: 0,
                  height: theme.get.rem(theme.spacing.xs, theme.shape.unit),
                  left: 0,
                  backgroundColor: 'transparent',
                  width: '100%',
                },
                _b["& .".concat(baseClass, "--trail")] = (_c = {
                    position: 'absolute',
                    border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                      .border.shape, theme.get.color((_e = props.color) !== null && _e !== void 0 ? _e :
                        'primary', ['black', 'white'].includes((_f = props.color) !== null && _f !==
                          void 0 ? _f : '') ? 'darker' : 'main')),
                    borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
                    bottom: 0,
                    height: theme.get.rem(theme.spacing.xs, theme.shape.unit),
                    left: 0,
                    backgroundColor: theme.get.color((_g = props.color) !== null && _g !== void 0 ? _g :
                      'primary', ['black', 'white'].includes((_h = props.color) !== null && _h !==
                        void 0 ? _h : '') ? 'darker' : 'main')
                  },
                  _c["&__thumb"] = {
                    display: 'none',
                  },
                  _c),
                _b["& .".concat(baseClass, "--progress")] = {
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                _b),
              _a;
          })));
        },
      },
      'contained': {
        styles: function(_a) {
          var _b, _c;
          var _d;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "C4tProgressBar-contained";
          return _b = {},
            _b["&.".concat(baseClass)] = (_c = {},
              _c["& .".concat(baseClass, "--track")] = {
                backgroundColor: theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary',
                  'lighter'),
              },
              _c),
            _b;
        }
      },
      'dashed': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "C4tProgressBar-dashed";
          return _b = {},
            _b["&.".concat(baseClass)] = (_c = {},
              _c["& .".concat(baseClass, "--track")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', theme.get
                  .color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'lighter')),
              },
              _c["& .".concat(baseClass, "--trail")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', theme.get
                  .color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary', ['black', 'white']
                    .includes((_f = props.color) !== null && _f !== void 0 ? _f : '') ? 'darker' : 'main')),
                backgroundColor: 'transparent'
              },
              _c),
            _b;
        },
      },
      'dotted': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "C4tProgressBar-dotted";
          return _b = {},
            _b["&.".concat(baseClass)] = (_c = {},
              _c["& .".concat(baseClass, "--track")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', theme.get
                  .color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'lighter')),
              },
              _c["& .".concat(baseClass, "--trail")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', theme.get
                  .color((_e = props.color) !== null && _e !== void 0 ? _e : 'primary', ['black', 'white']
                    .includes((_f = props.color) !== null && _f !== void 0 ? _f : '') ? 'darker' : 'main')),
                backgroundColor: 'transparent'
              },
              _c),
            _b;
        },
      },
      'outlined': {
        styles: function() {
          var _a, _b;
          var baseClass = "C4tProgressBar-outlined";
          return _a = {},
            _a["&.".concat(baseClass)] = (_b = {},
              _b["& .".concat(baseClass, "--trail")] = {
                backgroundColor: 'transparent'
              },
              _b),
            _a;
        },
      },
    },
  },
};
export default ProgressBar;
