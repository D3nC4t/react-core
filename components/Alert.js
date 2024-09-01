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
  useLayoutEffect,
} from 'react';
import {
  faCircleCheck,
  faCircleExclamation,
  faExclamation,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Box from './Box';
import Button from './Button';
import Icon from './Icon';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import validateChildComponent from '../utils/validateChildComponent';
var DISPLAY_NAME = 'C4tAlert';
var severityColors = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};
var severityIcons = {
  error: faCircleExclamation,
  info: faExclamation,
  success: faCircleCheck,
  warning: faTriangleExclamation,
};
export var Alert = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
  var children = _a.children,
    _r = _a.name,
    name = _r === void 0 ? DISPLAY_NAME : _r,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var severityColor = severityColors[(_b = withProps.severity) !== null && _b !== void 0 ? _b : 'info'];
  var defaultVariant = withProps.color === 'dark' ? 'text' : 'main';
  useLayoutEffect(function() {
    withProps.icon && validateChildComponent('Alert', withProps.icon, 'Icon', Icon);
  }, [withProps.icon]);
  useLayoutEffect(function() {
    withProps.extraAction && validateChildComponent('Alert', withProps.extraAction, 'Button', Button);
  }, [withProps.extraAction]);
  return (_jsxs(Box, __assign({
    color: (_c = withProps.color) !== null && _c !== void 0 ? _c : severityColor,
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref,
    variant: (_d = withProps.boxVariant) !== null && _d !== void 0 ? _d : 'auto-fit'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'closeIconColorVariant',
    'color',
    'colorVariant',
    'className',
    'closeIcon',
    'extraAction',
    'icon',
    'iconColorVariant',
    'jCss',
    'severity',
    'variant',
  ]), {
    children: [_jsx(Box, __assign({
      className: getClassName(withProps, name, withProps.variant, 'icon'),
      variant: 'auto-fit-no-padding'
    }, {
      children: (_e = withProps.icon) !== null && _e !== void 0 ? _e : (_jsx(Icon, {
        color: (_g = (_f = withProps.iconColor) !== null && _f !== void 0 ? _f : withProps
          .color) !== null && _g !== void 0 ? _g : severityColor,
        colorVariant: (_h = withProps.iconColorVariant) !== null && _h !== void 0 ? _h :
          defaultVariant,
        icon: severityIcons[(_j = withProps.severity) !== null && _j !== void 0 ? _j :
          'info'],
        size: 'lg'
      }))
    })), _jsx(Box, __assign({
      className: getClassName(withProps, name, withProps.variant, 'text'),
      variant: 'auto-fit-no-padding'
    }, {
      children: children
    })), _jsxs(Box, __assign({
      className: getClassName(withProps, name, withProps.variant, 'actions'),
      variant: 'auto-fit-no-padding'
    }, {
      children: [withProps.extraAction, withProps.onClose && (_jsx(Button, __assign({
        color: (_k = withProps.color) !== null && _k !== void 0 ? _k : severityColor,
        onClick: withProps.onClose,
        variant: 'icon'
      }, {
        children: _jsx(Icon, {
          color: (_m = (_l = withProps.closeIconColor) !== null && _l !== void 0 ?
            _l : withProps.color) !== null && _m !== void 0 ? _m : severityColor,
          colorVariant: (_o = withProps.closeIconColorVariant) !== null && _o !==
            void 0 ? _o : ((_p = withProps.iconColorVariant) !== null && _p !==
              void 0 ? _p : defaultVariant),
          icon: (_q = withProps.closeIcon) !== null && _q !== void 0 ? _q : faXmark
        })
      })))]
    }))]
  })));
});
Alert.displayName = DISPLAY_NAME;
export default Alert;
