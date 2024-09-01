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
  useMemo,
} from 'react';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import useDefaultProps from '../theme/hooks/useDefaultProps';
var DISPLAY_NAME = 'C4tBox';
export var Box = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var htmlTag = useMemo(function() {
    var _a;
    return (_a = withProps.tag) !== null && _a !== void 0 ? _a : 'div';
  }, [withProps.tag]);
  var $el = useMemo(function() {
    return styled(htmlTag, {
      dontForwardProp: ['tag'],
    })(function(_a) {
      var theme = _a.theme,
        props = __rest(_a, ["theme"]);
      return (__assign(__assign(__assign(__assign({}, (props.$bgColor && {
        backgroundColor: theme.get.color(props.$bgColor, props.$bgColorVariant),
      })), ((props.$bSize || props.$bUnit || props.$bShape || props.$bColor) && {
        border: theme.get.border(props.$bSize, props.$bUnit, props.$bShape, props.$bColor, props
          .$bColorVariant),
      })), (props.$bRadius && {
        borderRadius: typeof props.$bRadius === 'function' ?
          props.$bRadius(theme) :
          props.$bRadius,
      })), (props.$gap && {
        gap: props.$gap
      })));
    });
  }, [htmlTag]);
  return ($el ? _jsx($el, __assign({
    className: getClassName(withProps, name, withProps.variant),
    name: name,
    ref: ref
  }, _objectWithoutProperties(withProps, [
    'className',
  ]), {
    children: children
  })) : _jsx(_Fragment, {}));
});
Box.displayName = DISPLAY_NAME;
export default Box;
