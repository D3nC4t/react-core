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
  useState,
} from 'react';
import Portal from './Portal';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tModal';
export var Modal = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var _c = useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useEffect(function() {
    var _a, _b;
    setIsOpen((_a = withProps.open) !== null && _a !== void 0 ? _a : false);
    if (withProps.open && ref && 'current' in ref) {
      (_b = ref.current) === null || _b === void 0 ? void 0 : _b.openPortal();
    }
  }, [withProps.open]);
  return (_jsx(Portal, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    onOpen: function() {
      var _a;
      (_a = withProps.onOpen) === null || _a === void 0 ? void 0 : _a.call(withProps);
      setIsOpen(true);
    },
    onClose: function() {
      var _a;
      (_a = withProps.onClose) === null || _a === void 0 ? void 0 : _a.call(withProps);
      setIsOpen(false);
    },
    open: isOpen,
    ref: ref,
    variant: withProps.portalVariant
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'onOpen',
    'onClose',
    'open',
    'portalVariant',
    'variant',
  ]), {
    children: children
  })));
});
Modal.displayName = DISPLAY_NAME;
export default Modal;
