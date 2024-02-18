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
  isValidElement,
  useEffect,
} from 'react';
import Button from './Button';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps
} from '../theme';
var DISPLAY_NAME = 'C4tButtonGroup';
var StyledButtonGroup = styled('div')(function(_a) {
  var theme = _a.theme,
    props = __rest(_a, ["theme"]);
  return (__assign(__assign(__assign({}, ((!props.orientation || props.orientation === 'horizontal') && {
    display: 'inline-flex',
  })), (props.orientation === 'vertical' && {
    display: 'inline-block',
  })), {
    '& > button': __assign(__assign(__assign(__assign({}, (props.size === 'small' && {
      padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit, " ").concat(theme.spacing.xs)
        .concat(theme.shape.unit),
    })), (props.size === 'medium' && {
      padding: "".concat(theme.spacing.xs).concat(theme.shape.unit, " ").concat(theme.spacing.s)
        .concat(theme.shape.unit),
    })), (props.size === 'large' && {
      padding: "".concat(theme.spacing.s).concat(theme.shape.unit, " ").concat(theme.spacing.ml)
        .concat(theme.shape.unit),
    })), (props.variant === 'icon' && __assign(__assign(__assign({}, (props.size === 'small' && {
      padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit),
    })), (props.size === 'medium' && {
      padding: "".concat(theme.spacing.xs).concat(theme.shape.unit),
    })), (props.size === 'large' && {
      padding: "".concat(theme.spacing.s).concat(theme.shape.unit),
    }))))
  }));
});
export var ButtonGroup = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  useEffect(function() {
    var validateNode = function(node) {
      if (!isValidElement(node) || !(node.type === Button ||
          node.type.prototype instanceof Button)) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error('C4t: ButtonGroup only accepts "Button" as child nodes');
        }
      }
    };
    if (Array.isArray(children)) {
      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var node = children_1[_i];
        validateNode(node);
      }
    } else {
      validateNode(children);
    }
  }, [children]);
  return (_jsx(StyledButtonGroup, __assign({
    className: getClassName(withProps, name, withProps.variant),
    name: name,
    ref: ref
  }, _objectWithoutProperties(withProps, [
    'className',
  ]), {
    children: children
  })));
});
ButtonGroup.displayName = DISPLAY_NAME;
export default ButtonGroup;
