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
  useMemo,
} from 'react';
import Autocomplete from './Autocomplete';
import Box from './Box';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tTimePicker';
export var TimePicker = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var hours = useMemo(function() {
    var _hours = Array.from(Array.from(new Array(24)).keys());
    return _hours.map(function(hour) {
      return hour < 10 ? "0".concat(hour) : "".concat(hour);
    });
  }, []);
  var minutes = useMemo(function() {
    var _minutes = Array.from(Array.from(new Array(60)).keys());
    return _minutes.map(function(minute) {
      return minute < 10 ? "0".concat(minute) : "".concat(minute);
    });
  }, []);
  var hour = useMemo(function() {
    var _a, _b;
    return (_b = (_a = withProps.value) === null || _a === void 0 ? void 0 : _a.split(':')[0]) !== null &&
      _b !== void 0 ? _b : undefined;
  }, [withProps.value]);
  var minute = useMemo(function() {
    var _a, _b;
    return (_b = (_a = withProps.value) === null || _a === void 0 ? void 0 : _a.split(':')[1]) !== null &&
      _b !== void 0 ? _b : undefined;
  }, [withProps.value]);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref,
    variant: withProps.variant
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'onChange',
    'variant',
  ]), {
    children: [_jsx(Autocomplete, __assign({
      className: 'hour',
      placeholder: "HH",
      value: hour,
      usePopover: true,
      width: 50,
      onChange: function(value) {
        var _a;
        (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, ""
          .concat(value, ":").concat(minute));
      }
    }, {
      children: hours.map(function(_hour) {
        return (_jsx(Typography, __assign({
          tag: 'span'
        }, {
          children: _hour
        }), _hour));
      })
    })), _jsx(Typography, {
      children: ":"
    }), _jsx(Autocomplete, __assign({
      className: 'minute',
      placeholder: "MM",
      value: minute,
      usePopover: true,
      width: 50,
      onChange: function(value) {
        var _a;
        (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, ""
          .concat(hour, ":").concat(value));
      }
    }, {
      children: minutes.map(function(_minute) {
        return (_jsx(Typography, __assign({
          tag: 'span'
        }, {
          children: _minute
        }), _minute));
      })
    }))]
  })));
});
TimePicker.displayName = DISPLAY_NAME;
export default TimePicker;
