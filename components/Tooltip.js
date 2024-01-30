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
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  createPortal
} from 'react-dom';
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
export var Tooltip = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? 'C4tTooltip' : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var _c = useState(null),
    $tooltip = _c[0],
    set$tooltip = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var onMouseEnter = useCallback(function() {
    var _a, _b;
    if (!innerRef.current) {
      return;
    }
    var rect = innerRef.current.getBoundingClientRect();
    var left = rect.left + (withProps.leftOffset || 0);
    var top = rect.top + (withProps.topOffset || 0);
    withProps.tooltip && set$tooltip(createPortal(_jsx(Typography, __assign({
      color: withProps.color,
      jCss: __assign({
        position: 'absolute',
        top: function(theme) {
          var _a;
          return "calc(".concat(top, "px") +
            " + ".concat((_a = theme.typography.variants.p.defaultStyles) === null || _a ===
              void 0 ? void 0 : _a.fontSize, ")");
        },
        left: "".concat(left, "px")
      }, (_a = withProps.tooltipJCss) !== null && _a !== void 0 ? _a : {}),
      variant: (_b = withProps.typographyVariant) !== null && _b !== void 0 ? _b : 'caption'
    }, {
      children: withProps.tooltip
    })), withProps.container || document.body));
  }, [
    innerRef,
    withProps.color,
    withProps.container,
    withProps.leftOffset,
    withProps.tooltip,
    withProps.topOffset,
    withProps.typographyVariant,
  ]);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, [innerRef, innerRef.current]);
  useEffect(function() {
    if (!$tooltip) {
      return;
    }
    return function() {
      return set$tooltip(null);
    }; // if detached, hide the tooltip
  }, [$tooltip]);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef,
    variant: 'auto-fit-no-padding',
    onMouseEnter: onMouseEnter,
    onMouseLeave: function() {
      return set$tooltip(null);
    }
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'onMouseEnter',
    'onMouseLeave',
    'tooltipJCss',
    'tooltip',
    'topOffset',
    'variant',
  ]), {
    children: _jsxs(_Fragment, {
      children: [children, $tooltip]
    })
  })));
});
Tooltip.displayName = 'C4tTooltip';
export default Tooltip;
