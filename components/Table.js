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
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableRow from './TableRow';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  validateChildComponentByTypes
} from '../utils';
export var Table = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? 'C4tTable' : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useEffect(function() {
    if (!Array.isArray(children)) {
      if (!validateChildComponentByTypes('Table', children, {
          TableBody: TableBody,
          TableHead: TableHead,
          TableRow: TableRow,
        }, true) && process.env.NODE_ENV !== 'production') {
        throw new Error('C4t: Table must have only TableRow, TableHead or TableBody as children');
      }
      return;
    }
    if (children.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('C4t: Table must have at least one TableRow as child');
      }
    }
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
      var node = children_1[_i];
      if (!validateChildComponentByTypes('Table', node, {
          TableBody: TableBody,
          TableHead: TableHead,
          TableRow: TableRow,
        }, true) && process.env.NODE_ENV !== 'production') {
        throw new Error('C4t: Table must have only TableRow, TableHead or TableBody as children');
      }
    }
  }, [children]);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      ' ' + getClassName({}, name, 'box'),
    jCss: __assign({
      width: '100%'
    }, jCss),
    ref: ref,
    tag: 'table',
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
Table.displayName = 'C4tTable';
export default Table;
