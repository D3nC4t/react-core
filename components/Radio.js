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
  useEffect,
  useImperativeHandle,
  useState,
  useRef,
} from 'react';
import Box from './Box';
import Icon from './Icon';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tRadio';
var StyledBox = styled(Box, {
  forwardProps: [
    '$bgColor',
    '$bgColorVariant',
    '$bColor',
    '$bColorVariant',
    '$gap',
    '$bRadius',
    '$bShape',
    '$bSize',
    '$bUnit',
  ],
})({});
var StyledInput = styled('input')({});
export var Radio = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g;
  var _h = _a.name,
    name = _h === void 0 ? DISPLAY_NAME : _h,
    inputProps = __rest(_a, ["name"]);
  var _j = useState(false),
    checked = _j[0],
    setChecked = _j[1];
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var outerRef = useRef(null);
  var changeStatus = useCallback(function(event) {
    var _a;
    if (withProps.disabled) {
      return;
    }
    var status = !checked;
    setChecked(status);
    (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, event, status);
  }, [checked, withProps.disabled, withProps.onChange]);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    if (outerRef.current && innerRef.current) {
      outerRef.current.innerRef = innerRef.current;
    }
    return outerRef.current;
  }, [
    outerRef, outerRef.current,
    innerRef, innerRef.current,
  ]);
  useEffect(function() {
    setChecked(!!withProps.value);
  }, [withProps.value]);
  return (_jsxs(StyledBox, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      (withProps.invalid ? ' invalid' : ''),
    jCss: jCss,
    ref: outerRef,
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'auto-fit'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'checkedIcon',
    'className',
    'invalid',
    'jCss',
    'onChange',
    'uncheckedIcon',
    'value',
    'variant',
  ]), {
    children: [withProps.checkedIcon && withProps.uncheckedIcon ? (_jsx(Icon, {
      className: getClassName({}, name, withProps.variant, 'input__icon') +
        (withProps.disabled ? ' disabled' : ''),
      color: (_c = withProps.color) !== null && _c !== void 0 ? _c : 'primary',
      colorVariant: (_d = withProps.colorVariant) !== null && _d !== void 0 ? _d : 'main',
      icon: checked ? withProps.checkedIcon : withProps.uncheckedIcon,
      onClick: changeStatus,
      ref: innerRef
    })) : (_jsx(StyledInput, {
      className: getClassName({}, name, withProps.variant, 'input'),
      checked: checked,
      disabled: withProps.disabled,
      onClick: changeStatus,
      readOnly: true,
      ref: innerRef,
      type: (_e = withProps.type) !== null && _e !== void 0 ? _e : 'radio'
    })), _jsx("input", {
      checked: checked,
      name: (_f = withProps.inputName) !== null && _f !== void 0 ? _f : name,
      readOnly: true,
      style: {
        display: 'none'
      },
      type: (_g = withProps.type) !== null && _g !== void 0 ? _g : 'radio'
    })]
  })));
});
Radio.displayName = DISPLAY_NAME;
export default Radio;
