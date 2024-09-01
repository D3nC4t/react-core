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
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  useMemo
} from 'react';
import {
  Chart
} from 'react-google-charts';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import kebabCaseToPascalCase from '../utils/kebebCaseToPascalCase';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tGoogleChart';
var StyledChart = styled(Chart)({});
var GoogleChart = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var chartType = useMemo(function() {
    var _a;
    return kebabCaseToPascalCase((_a = withProps.variant) !== null && _a !== void 0 ? _a : 'line-chart');
  }, [withProps.variant]);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  return _jsx(StyledChart, __assign({
    className: getClassName(withProps, name, withProps.variant),
    chartType: chartType,
    jCss: jCss,
    ref: ref
  }, _objectWithoutProperties(withProps, [
    'color',
    'colorVariant',
    'className',
    'variant',
  ])));
});
GoogleChart.displayName = DISPLAY_NAME;
export default GoogleChart;
