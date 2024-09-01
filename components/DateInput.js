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
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import Input from './Input';
import {
  DateTime
} from 'luxon';
import {
  throwError
} from '../error';
import Icon from './Icon';
import {
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Popover from './Popover';
import DatePicker from './DatePicker';
var DISPLAY_NAME = 'C4tDateInput';
export var DateRegex = /^(\d{4})-([0-1][0-9])-([0-3][0-9])( [0-2][0-9]:[0-5][0-9])?$/;
export var DateInput = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["name"]);
  var _c = React.useState(undefined),
    selectedDate = _c[0],
    setSelectedDate = _c[1];
  var innerRef = useRef(null);
  var popoverRef = useRef(null);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  useEffect(function() {
    if (!withProps.value) {
      setSelectedDate(undefined);
      return;
    }
    var date = new Date(withProps.value);
    if (!DateRegex.test(withProps.value) || date === "Invalid Date") {
      throwError('COT-2012').then(function() {});
      return;
    }
    setSelectedDate(DateTime.fromJSDate(new Date(withProps.value)));
  }, [withProps.value]);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'onChange',
    'value',
    'variant',
  ]), {
    children: [_jsx(Input, {
      endAdornment: (_jsx(Button, __assign({
        onClick: function() {
          var _a;
          return (_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a
            .openPortal();
        },
        variant: 'icon'
      }, {
        children: _jsx(Icon, {
          icon: faCalendar
        })
      }))),
      onChange: function(e) {
        var _a, _b;
        var value = e.target.value;
        if (!value || value === '') {
          setSelectedDate(undefined);
          (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, value);
          return;
        }
        if (DateRegex.test(value)) {
          var date = new Date(value);
          if (date === "Invalid Date") {
            throwError('COT-2012').then(function() {});
            return;
          }
          setSelectedDate(DateTime.fromJSDate(date));
          (_b = withProps.onChange) === null || _b === void 0 ? void 0 : _b.call(withProps, value);
        }
      },
      value: withProps.value,
      width: withProps.withTime ? 128 + 32 : 128
    }), _jsx(Popover, __assign({
      "$anchorEl": innerRef.current,
      ref: popoverRef
    }, {
      children: _jsx(DatePicker, {
        selectedDate: selectedDate,
        onChange: function(date) {
          var _a, _b;
          setSelectedDate(date);
          var format = withProps.withTime ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd';
          (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, (
              _b = date === null || date === void 0 ? void 0 : date.toFormat(format)) !==
            null && _b !== void 0 ? _b : '');
        },
        withTime: withProps.withTime
      })
    }))]
  })));
});
DateInput.displayName = DISPLAY_NAME;
export default DateInput;
