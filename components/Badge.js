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
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs
} from "react/jsx-runtime";
import React, {
  forwardRef,
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
var DISPLAY_NAME = 'C4tBadge';
var StyledBadge = styled('div')({});
export var Badge = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var _c = React.useState(false),
    showText = _c[0],
    setShowText = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref,
    onMouseEnter: function(event) {
      var _a;
      setShowText(true);
      (_a = withProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
    },
    onMouseLeave: function(event) {
      var _a;
      setShowText(false);
      (_a = withProps.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
    },
    variant: 'auto-fit-no-padding'
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: _jsxs(_Fragment, {
      children: [_jsx(StyledBadge, __assign({
        className: getClassName(withProps, name, withProps.variant, 'badge') +
          (!withProps.text || withProps.text == '' ? ' empty' : '') +
          (withProps.position ? " ".concat(withProps.position) : '') +
          (withProps.showAsDot ? ' dot' : '') +
          (showText ? ' show-text' : '')
      }, {
        children: !withProps.showAsDot || showText ? withProps.text : ''
      })), children]
    })
  })));
});
Badge.displayName = DISPLAY_NAME;
export default Badge;
