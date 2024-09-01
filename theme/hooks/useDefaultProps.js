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
  useDebugValue,
  useMemo
} from 'react';
import {
  merge
} from 'lodash';
import createTheme from '../styled/createTheme';
import objectCode from '../../utils/objectCode';
import {
  useTheme
} from '../../theme';
var defaultTheme = createTheme();
export default function useDefaultProps(inputProps, componentName, defaultVariant, forceTheme) {
  if (forceTheme === void 0) {
    forceTheme = defaultTheme;
  }
  var theme = useTheme(forceTheme);
  var components = useMemo(function() {
    return theme.components || {};
  }, [theme]);
  var useProps = useMemo(function() {
    var _a, _b, _c, _d;
    var component = components[componentName];
    if (!component) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn("Component \"".concat(componentName, "\" does not exist in the theme."));
      }
      return;
    }
    var defaultProps = component.defaultProps;
    var variant = inputProps.variant;
    if (!variant || variant === '') {
      variant = (_b = (_a = defaultProps.variant) !== null && _a !== void 0 ? _a : defaultVariant) !== null &&
        _b !== void 0 ? _b : 'root';
    }
    var variantProps = (_d = (component.variants && ((_c = component.variants[variant]) === null || _c === void 0 ?
      void 0 : _c.props))) !== null && _d !== void 0 ? _d : {};
    var baseProps = merge({
      variant: variant
    }, defaultProps, variantProps);
    for (var _i = 0, _e = Object.keys(baseProps); _i < _e.length; _i++) {
      var prop = _e[_i];
      var value = baseProps[prop];
      if (typeof value === 'function') {
        value = value(__assign(__assign({
          theme: theme
        }, inputProps), {
          name: componentName,
          variant: variant
        }));
      }
      baseProps[prop] = value;
    }
    return merge(baseProps, inputProps, {
      variant: variant
    });
  }, [componentName, components, defaultVariant, objectCode(inputProps)]);
  if (process.env.NODE_ENV !== 'production') {
    useDebugValue(useProps);
  }
  return useProps !== null && useProps !== void 0 ? useProps : inputProps;
}
