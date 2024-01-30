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
  useEffect,
} from 'react';
import Box from './Box';
import TableCell from './TableCell';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  validateChildComponent
} from '../utils';
export var TableRow = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? 'C4tTableRow' : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useEffect(function() {
    if (!Array.isArray(children) || children.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('TableBody must have at least one TableRow as child');
      }
    }
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
      var node = children_1[_i];
      validateChildComponent('TableRow', node, 'TableCell', TableCell);
    }
  }, [children]);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      ' ' + getClassName({}, name, 'box'),
    jCss: jCss,
    ref: ref,
    tag: 'tr',
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'jCss',
    'variant',
  ]), {
    children: children
  })));
});
TableRow.displayName = 'C4tTableRow';
export default TableRow;
