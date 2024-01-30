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
var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
import {
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var StyledSpan = styled('span')({
  display: 'inline-block',
});
export var CircularLoading = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? 'C4tCircularLoading' : _b,
    inputProps = __rest(_a, ["name"]);
  var _c = useState([]),
    $lines = _c[0],
    set$lines = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var getClass = useCallback(function() {
    var _a;
    var mutations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      mutations[_i] = arguments[_i];
    }
    return getClassName.apply(void 0, __spreadArray([withProps, name, (_a = withProps.variant) !== null &&
      _a !== void 0 ? _a : 'root'
    ], mutations, false));
  }, [name, withProps, withProps.variant]);
  useLayoutEffect(function() {
    var _a, _b, _c;
    var $lines = [];
    var nLines = withProps.nLines || 1;
    for (var i = 0; i < nLines; i++) {
      $lines.push((_b = (_a = withProps.lines$el) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !==
        void 0 ? _b : (_jsx(StyledSpan, __assign({
          jCss: (_c = withProps.linesJCss) === null || _c === void 0 ? void 0 : _c[i],
          className: getClass('inner', 'line')
        }, {
          children: _jsx(StyledSpan, {
            className: getClass('inner', 'line', 'track')
          })
        }), i)));
    }
    set$lines($lines);
  }, [withProps.linesJCss, withProps.lines$el, withProps.nLines]);
  return (_jsx(Box, __assign({
    className: getClass(),
    jCss: jCss,
    name: name
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
  ]), {
    ref: ref
  }, {
    children: _jsx(StyledSpan, __assign({
      className: getClass('inner')
    }, {
      children: $lines
    }))
  })));
});
CircularLoading.displayName = 'C4tCircularLoading';
export default CircularLoading;
