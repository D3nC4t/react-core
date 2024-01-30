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
  useEffect,
  useLayoutEffect,
  useState,
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
var StyledBox = styled(Box)({}); // Using styled to don't forward the '$' variables
var StyledAvatarImg = styled('img')({});
export var Avatar = forwardRef(function(_a, ref) {
  var _b, _c;
  var children = _a.children,
    _d = _a.name,
    name = _d === void 0 ? 'C4tAvatar' : _d,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var _e = useState(''),
    altText = _e[0],
    setAltText = _e[1];
  var _f = useState(false),
    hasError = _f[0],
    setHasError = _f[1];
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useEffect(function() {
    var _a, _b;
    var words = (_b = (_a = withProps.alt) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null &&
      _b !== void 0 ? _b : [];
    var firstLetters = words.map(function(word) {
      return word[0].toUpperCase();
    });
    setAltText(firstLetters.slice(0, 2).join(''));
  }, [withProps.alt]);
  useLayoutEffect(function() {
    setHasError(false);
  }, [withProps.src]);
  return (_jsxs(StyledBox, __assign({
    className: getClassName(withProps, name, withProps.variant, 'box')
  }, withProps.boxProps, {
    variant: (_c = (_b = withProps.boxProps) === null || _b === void 0 ? void 0 : _b.variant) !== null &&
      _c !== void 0 ? _c : 'auto-fit',
    ref: ref
  }, {
    children: [!children && withProps.src && withProps.src !== '' && !hasError && _jsx(StyledAvatarImg,
      __assign({
        className: getClassName(withProps, name, withProps.variant, 'img'),
        jCss: jCss,
        name: name,
        onError: function() {
          return setHasError(true);
        }
      }, _objectWithoutProperties(withProps, [
        'boxProps',
        'className',
        'jCss',
      ]))), (hasError || children) && _jsx(Box, __assign({
      className: getClassName(withProps, name, withProps.variant, 'alt'),
      variant: 'no-padding'
    }, {
      children: children !== null && children !== void 0 ? children : altText
    }))]
  })));
});
Avatar.displayName = 'C4tAvatar';
export default Avatar;
