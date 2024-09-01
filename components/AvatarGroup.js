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
  jsxs as _jsxs,
  jsx as _jsx
} from "react/jsx-runtime";
import React, {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import Avatar from './Avatar';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import validateChildComponent from '../utils/validateChildComponent';
import {
  throwError
} from '../error';
var DISPLAY_NAME = 'C4tAvatarGroup';
var StyledBox = styled(Box)({}); // Using styled to don't forward the '$' variables
export var AvatarGroup = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var $avatars = useMemo(function() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!Array.isArray(children)) {
      throwError('COT-2003').then(function() {});
    }
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
      var node = children_1[_i];
      validateChildComponent('AvatarGroup', node, 'Avatar', Avatar);
    }
    var $elCount = children.length;
    var max = (_a = withProps.max) !== null && _a !== void 0 ? _a : $elCount;
    var total = (_b = withProps.total) !== null && _b !== void 0 ? _b : $elCount;
    var diff = total > $elCount ? 1 : 0;
    var remaining = total - max + 1 - diff;
    var customSurplus = (_d = (_c = withProps.renderSurplus) === null || _c === void 0 ? void 0 : _c.call(
      withProps, remaining)) !== null && _d !== void 0 ? _d : null;
    var $avatars = [];
    var $elements = __spreadArray(__spreadArray([], children.slice(0, $elCount > max ? max - 1 : max), true), (
      $elCount > max || withProps.total ? (customSurplus ? [customSurplus] : [
        _jsxs(Avatar, __assign({
          boxProps: {
            $bColor: 'grey',
            $bgColor: 'grey',
          }
        }, {
          children: ["+", remaining]
        }), 'fixed-plus-count')
      ]) : []), true);
    if (customSurplus && process.env.NODE_ENV !== 'production') {
      if (!React.isValidElement(customSurplus)) {
        throwError('COT-2004').then(function() {});
      }
      try {
        validateChildComponent('AvatarGroup', customSurplus, 'Avatar', Avatar);
      } catch (e) {
        throwError('COT-2005').then(function() {});
      }
    }
    for (var _h = 0, $elements_1 = $elements; _h < $elements_1.length; _h++) {
      var child = $elements_1[_h];
      var boxProps = child.key === 'plus-count' ? ((_e = child.props.boxProps) !== null && _e !== void 0 ? _e :
      {}) : __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (withProps.$bColor &&
      {
        $bColor: withProps.$bColor
      })), (withProps.$bColorVariant && {
        $bColorVariant: withProps.$bColorVariant
      })), (withProps.$bRadius && {
        $bRadius: withProps.$bRadius
      })), (withProps.$bShape && {
        $bShape: withProps.$bShape
      })), (withProps.$bSize && {
        $bSize: withProps.$bSize
      })), (withProps.$bgColor && {
        $bgColor: withProps.$bgColor
      })), (withProps.$bgColorVariant && {
        $bgColorVariant: withProps.$bgColorVariant
      })), ((_f = child.props.boxProps) !== null && _f !== void 0 ? _f : {}));
      var newAvatar = cloneElement(child, __assign(__assign({}, child.props), {
        boxProps: boxProps,
        variant: (_g = child.props.variant) !== null && _g !== void 0 ? _g : withProps.variant
      }));
      withProps.flipContent ? $avatars.unshift(newAvatar) : $avatars.push(newAvatar);
    }
    return $avatars;
  }, [
    children,
    withProps.flipContent,
    withProps.max,
    withProps.total,
    withProps.variant,
    withProps.$bColor,
    withProps.$bColorVariant,
    withProps.$bRadius,
    withProps.$bShape,
    withProps.$bSize,
    withProps.$bgColor,
    withProps.$bgColorVariant,
  ]);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsx(StyledBox, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef,
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'auto-fit-no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'flipContent',
    'jCss',
    'max',
    'total',
    'variant',
  ]), {
    children: $avatars
  })));
});
AvatarGroup.displayName = DISPLAY_NAME;
export default AvatarGroup;
