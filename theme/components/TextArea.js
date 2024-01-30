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
import {
  merge
} from 'lodash';
import Input from '../../theme/components/Input';
var buildVariants = function(extraStyles) {
  var definitions = {};
  var variants = Input.C4tInput.variants;
  var _loop_1 = function(variant) {
    var baseStyles = variants[variant].styles;
    definitions[variant] = {
      styles: {}
    };
    if (!extraStyles[variant]) {
      definitions[variant].styles = baseStyles;
    } else if (typeof baseStyles === 'object' && typeof extraStyles[variant] === 'object') {
      definitions[variant].styles = merge(baseStyles, extraStyles[variant]);
    } else if (typeof baseStyles === 'function' && typeof extraStyles[variant] === 'function') {
      definitions[variant].styles = (function(inputProps) {
        return merge(baseStyles(inputProps), extraStyles[variant](inputProps));
      });
    } else if (typeof baseStyles === 'object' && typeof extraStyles[variant] === 'function') {
      definitions[variant].styles = (function(inputProps) {
        return merge(baseStyles, extraStyles[variant](inputProps));
      });
    }
  };
  for (var _i = 0, _a = Object.keys(variants); _i < _a.length; _i++) {
    var variant = _a[_i];
    _loop_1(variant);
  }
  return definitions;
};
var TextArea = {
  C4tTextArea: {
    defaultProps: {},
    variants: __assign({}, buildVariants({
      'root': function(_a) {
        var _b, _c;
        var theme = _a.theme,
          props = __rest(_a, ["theme"]);
        var minHeight = theme.get.rem(((_b = props.rows) !== null && _b !== void 0 ? _b : 3) * 20, 'px');
        var minWidth = "calc(".concat(theme.get.rem((_c = props.width) !== null && _c !== void 0 ? _c : 128,
            'px')) +
          " - ".concat(theme.shape.border.size * 2).concat(theme.shape.border.unit) +
          " - ".concat(theme.spacing.xs * 2).concat(theme.shape.unit, ")");
        return {
          height: minHeight,
          maxHeight: '100%',
          maxWidth: '100%',
          minHeight: minHeight,
          minWidth: minWidth,
          width: minWidth,
        };
      },
    })),
  },
};
export default TextArea;
