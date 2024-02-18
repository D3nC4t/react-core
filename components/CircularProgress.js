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
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import Box from './Box';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tCircularProgress';
export var CircularProgress = forwardRef(function(_a, ref) {
  var _b, _c;
  var _d = _a.name,
    name = _d === void 0 ? DISPLAY_NAME : _d,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var _e = useState(0),
    percentage = _e[0],
    setPercentage = _e[1];
  var jCss = useVariantJCss(__assign(__assign({}, withProps), {
    percentage: percentage
  }), name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  useEffect(function() {
    var _a, _b, _c;
    var max = (_a = withProps.max) !== null && _a !== void 0 ? _a : 100;
    var min = (_b = withProps.min) !== null && _b !== void 0 ? _b : 0;
    var value = (_c = withProps.value) !== null && _c !== void 0 ? _c : 0;
    if (value < min) {
      setPercentage(0);
    } else if (value > max) {
      setPercentage(100);
    } else {
      setPercentage(Math.round((value - min) / (max - min) * 100));
    }
  }, [withProps.max, withProps.min, withProps.percentage, withProps.value]);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef
  }, _objectWithoutProperties(withProps, [
    'className',
    'hidePercentage',
    'jCss',
    'max',
    'min',
    'percentage',
    'showRangeOnPercentage',
    'value',
    'variant',
  ]), {
    children: !withProps.hidePercentage && (_jsx(Typography, __assign({
      variant: 'p',
      className: getClassName(withProps, name, withProps.variant, 'progress')
    }, {
      children: withProps.showRangeOnPercentage ?
        "".concat((_b = withProps.value) !== null && _b !== void 0 ? _b : 0, "/").concat((_c =
          withProps.max) !== null && _c !== void 0 ? _c : 100) :
        "".concat(percentage, "%")
    })))
  }), percentage));
});
CircularProgress.displayName = DISPLAY_NAME;
export default CircularProgress;
