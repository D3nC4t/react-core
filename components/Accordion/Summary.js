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
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {
  faCaretUp
} from "@fortawesome/free-solid-svg-icons/faCaretUp";
import Box from '../Box';
import Icon from "../Icon";
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import {
  AccordionContext
} from "../Accordion";
import styled, {
  getClassName
} from '../../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../../theme';
var DISPLAY_NAME = 'C4tAccordionSummary';
var StyledSummary = styled('div')({});
var StyledIconBox = styled('span')({});
export var Summary = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var _d = useContext(AccordionContext),
    disabled = _d.disabled,
    expanded = _d.expanded,
    toggleExpanded = _d.toggleExpanded;
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var handleExpand = useCallback(function(event) {
    var _a;
    if (disabled) {
      return;
    }
    toggleExpanded();
    (_a = withProps.onClick) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
  }, [toggleExpanded, withProps]);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      (disabled ? ' disabled' : ''),
    jCss: jCss,
    ref: innerRef,
    onClick: handleExpand
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'onClick',
    'variant',
  ]), {
    children: [_jsx(StyledSummary, __assign({
      className: 'content'
    }, {
      children: children
    })), _jsx(StyledIconBox, __assign({
      className: 'icon-box'
    }, {
      children: (_b = withProps.icon) !== null && _b !== void 0 ? _b : (_jsx(Icon, {
        color: disabled ? 'grey' : withProps.color,
        colorVariant: disabled ? 'lighter' : withProps.colorVariant,
        icon: expanded ? faCaretUp : faCaretDown,
        size: withProps.iconSize
      }))
    }))]
  })));
});
Summary.displayName = DISPLAY_NAME;
export default Summary;
