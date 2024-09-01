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
  Fragment as _Fragment
} from "react/jsx-runtime";
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import Box from '../Box';
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import {
  AccordionContext
} from "../Accordion";
import {
  getClassName
} from '../../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../../theme';
var DISPLAY_NAME = 'C4tAccordionActions';
export var Actions = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var expanded = useContext(AccordionContext).expanded;
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return withProps.forceExpand || expanded ? (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: children
  }))) : _jsx(_Fragment, {});
});
Actions.displayName = DISPLAY_NAME;
export default Actions;
