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
var Autocomplete = {
  C4tAutocomplete: {
    defaultProps: {},
    variants: {
      'root': {
        styles: {},
      },
      'outlined-sandwich': {
        styles: function(_a) {
          var _b, _c;
          var props = __rest(_a, []);
          var baseClass = "".concat(props.selectName, "-outlined-sandwich");
          return _b = {},
            _b["& .".concat(baseClass, "__options")] = (_c = {},
              _c["& .".concat(baseClass, "__option")] = {
                '&:first-of-type, &:not(:first-of-type)': {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
              },
              _c["& .".concat(baseClass, "__search")] = {
                borderTopLeftRadius: "".concat(props.theme.shape.border.radius) +
                  "".concat(props.theme.shape.border.unit),
                borderTopRightRadius: "".concat(props.theme.shape.border.radius) +
                  "".concat(props.theme.shape.border.unit),
              },
              _c),
            _b;
        },
      },
      'rounded': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.selectName, "-rounded");
          return _b = {},
            _b["& .".concat(baseClass, "__options")] = (_c = {},
              _c["& .".concat(baseClass, "__search")] = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              },
              _c),
            _b;
        },
      },
      'round-contained': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.selectName, "-round-contained");
          return _b = {},
            _b["& .".concat(baseClass, "__options")] = (_c = {},
              _c["& .".concat(baseClass, "__search")] = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              },
              _c),
            _b;
        },
      },
      'round-outlined': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.selectName, "-round-outlined");
          return _b = {},
            _b["& .".concat(baseClass, "__options")] = (_c = {},
              _c["& .".concat(baseClass, "__search")] = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              },
              _c),
            _b;
        },
      },
      'sandwich': {
        styles: function(_a) {
          var _b, _c;
          var props = __rest(_a, []);
          var baseClass = "".concat(props.selectName, "-sandwich");
          return _b = {},
            _b["& .".concat(baseClass, "__options")] = (_c = {},
              _c["& .".concat(baseClass, "__option")] = {
                '&:first-of-type, &:not(:first-of-type)': {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
              },
              _c),
            _b;
        },
      },
    },
  },
};
export default Autocomplete;
