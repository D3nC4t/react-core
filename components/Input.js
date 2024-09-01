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
  isValidElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDebouncedCallback
} from '../hooks';
import {
  useDefaultProps,
  useTheme,
  useVariantJCss
} from '../theme';
import {
  useTranslations
} from '../translations';
var DISPLAY_NAME = 'C4tInput';
var StyledInput = styled('input')({});
export var Input = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g, _h;
  var _j = _a.name,
    name = _j === void 0 ? DISPLAY_NAME : _j,
    inputProps = __rest(_a, ["name"]);
  var theme = useTheme();
  var _k = useTranslations('core'),
    intl = _k[0],
    hasLoadedIntl = _k[1];
  var _l = useState(false),
    focused = _l[0],
    setFocused = _l[1];
  var _m = useState(0),
    paddingEnd = _m[0],
    setPaddingEnd = _m[1];
  var _o = useState(0),
    paddingStart = _o[0],
    setPaddingStart = _o[1];
  var withProps = useDefaultProps(inputProps, name);
  var _p = useState(''),
    value = _p[0],
    setValue = _p[1];
  var innerRef = useRef(null);
  var outerRef = useRef(null);
  var endAdornmentRef = useRef(null);
  var startAdornmentRef = useRef(null);
  var debouncedOnChange = useDebouncedCallback(function(event) {
    var _a;
    (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
  }, [withProps.onChange], 1000);
  var baseClassName = "".concat(name, "-").concat((_b = withProps.variant) !== null && _b !== void 0 ? _b : 'root');
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    if (innerRef.current && outerRef.current) {
      innerRef.current.outerRef = outerRef.current;
      if (startAdornmentRef.current) {
        innerRef.current.startAdornmentRef = startAdornmentRef.current;
      }
      if (endAdornmentRef.current) {
        innerRef.current.endAdornmentRef = endAdornmentRef.current;
      }
    }
    return innerRef.current;
  }, [
    innerRef, innerRef.current,
    outerRef, outerRef.current,
  ]);
  useEffect(function() {
    var _a;
    setValue((_a = withProps.value) !== null && _a !== void 0 ? _a : '');
  }, [withProps.value]);
  useEffect(function() {
    if (startAdornmentRef.current) {
      setPaddingStart(startAdornmentRef.current.offsetWidth + theme.spacing.xxs);
    }
    if (endAdornmentRef.current) {
      setPaddingEnd(endAdornmentRef.current.offsetWidth + theme.spacing.xxs);
    }
  });
  var placeholder = (_c = withProps.placeholder) !== null && _c !== void 0 ? _c : '';
  switch (withProps.type) {
    case 'text':
      placeholder = hasLoadedIntl ? intl.formatMessage({
        id: 'input.text.placeholder'
      }) : '';
      break;
    case 'email':
      placeholder = hasLoadedIntl ? intl.formatMessage({
        id: 'input.email.placeholder'
      }) : '';
      break;
    case 'number':
      placeholder = '0123456789';
      break;
  }
  return (_jsxs(Box, __assign({
    className: getClassName((_d = withProps.boxProps) !== null && _d !== void 0 ? _d : {}, name, 'box') +
      (focused ? " focused" : '') +
      (withProps.disabled ? " disabled" : '') +
      (withProps.invalid ? " invalid" : ''),
    color: withProps.color,
    variant: (_f = (_e = withProps.boxProps) === null || _e === void 0 ? void 0 : _e.variant) !== null &&
      _f !== void 0 ? _f : 'flex-row',
    ref: outerRef
  }, _objectWithoutProperties(__assign(__assign({}, ((_g = withProps.boxProps) !== null && _g !== void 0 ?
    _g : {})), (withProps.width && {
    width: withProps.width
  })), [
    'className',
    'variant',
  ]), {
    children: [withProps.startAdornment && isValidElement(withProps.startAdornment) && (_jsx(Box, __assign({
      className: "".concat(baseClassName, "__start-adornment"),
      ref: startAdornmentRef,
      tag: 'i',
      variant: 'no-padding'
    }, {
      children: withProps.startAdornment
    }))), _jsx(StyledInput, __assign({
      className: getClassName(withProps, name, withProps.variant),
      jCss: jCss,
      name: name,
      onChange: function(event) {
        setValue(event.target.value);
        debouncedOnChange(event);
      },
      onFocus: function(event) {
        var _a;
        setFocused(true);
        (_a = withProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
      },
      onBlur: function(event) {
        var _a;
        setFocused(false);
        (_a = withProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
      },
      placeholder: placeholder,
      ref: innerRef,
      style: __assign(__assign({}, (paddingStart > 0 && {
        paddingLeft: theme.get.rem(paddingStart, 'px')
      })), (paddingEnd > 0 && {
        paddingRight: theme.get.rem(paddingEnd, 'px')
      })),
      value: value
    }, _objectWithoutProperties(withProps, [
      'boxProps',
      'endAdornment',
      'className',
      'jCss',
      'onChange',
      'onFocus',
      'onBlur',
      'startAdornment',
      'value',
      'width',
    ]))), _jsx("input", {
      name: (_h = withProps.inputName) !== null && _h !== void 0 ? _h : name,
      type: 'hidden',
      value: value,
      readOnly: true,
      style: {
        display: 'none'
      }
    }), withProps.endAdornment && isValidElement(withProps.endAdornment) && (_jsx(Box, __assign({
      className: "".concat(baseClassName, "__end-adornment"),
      ref: endAdornmentRef,
      tag: 'i',
      variant: 'no-padding'
    }, {
      children: withProps.endAdornment
    })))]
  })));
});
Input.displayName = DISPLAY_NAME;
export default Input;
