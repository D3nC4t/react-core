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
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useState,
  useLayoutEffect,
  useCallback,
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
var StyledSwitch = styled('div')({
  position: 'absolute',
});
export var Switch = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? 'C4tSwitch' : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useState(false),
    state = _d[0],
    setState = _d[1];
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var handleOnClick = useCallback(function(event) {
    var _a;
    setState(function(state) {
      return !state;
    });
    (_a = withProps.onClick) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
  }, [state, withProps.onClick]);
  useLayoutEffect(function() {
    var _a;
    setState((_a = withProps.value) !== null && _a !== void 0 ? _a : false);
  }, [withProps.value]);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: __assign({
      position: 'relative'
    }, jCss),
    ref: ref,
    variant: 'auto-fit-no-padding',
    onClick: handleOnClick
  }, _objectWithoutProperties(withProps, [
    'className',
    'inputName',
    'jCss',
    'onClick',
    'variant',
  ]), {
    children: [_jsx(StyledSwitch, {
      className: getClassName(withProps, name, withProps.variant, 'thumb') +
        (state ? ' checked' : '')
    }), _jsx("input", {
      style: {
        display: 'none'
      },
      name: (_b = withProps.inputName) !== null && _b !== void 0 ? _b : name,
      type: 'radio',
      readOnly: true,
      value: state ? 'on' : 'off'
    })]
  })));
});
Switch.displayName = 'C4tSwitch';
export default Switch;
