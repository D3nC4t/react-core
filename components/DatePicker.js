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
  Fragment as _Fragment,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useMemo,
} from 'react';
import {
  DateTime
} from 'luxon';
import Box from './Box';
import PickerView from './DatePicker/PickerView';
import PickerControls from './DatePicker/PickerControls';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  DatePickerContextProvider,
  DatePickerViewType
} from '../context/date-picker';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import TimePicker from './TimePicker';
import {
  Typography
} from './index';
var DISPLAY_NAME = 'C4tDatePicker';
export var DatePicker = forwardRef(function(_a, ref) {
  var _b, _c;
  var _d = _a.name,
    name = _d === void 0 ? DISPLAY_NAME : _d,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var selectedDate = useMemo(function() {
    if (!withProps.selectedDate) {
      return undefined;
    }
    if (!(withProps.selectedDate instanceof DateTime)) {
      return DateTime.fromJSDate(withProps.selectedDate);
    }
    return withProps.selectedDate;
  }, [withProps.selectedDate]);
  var toDate = useMemo(function() {
    if (!withProps.toDate) {
      return undefined;
    }
    if (!(withProps.toDate instanceof DateTime)) {
      return DateTime.fromJSDate(withProps.toDate);
    }
    return withProps.toDate;
  }, [withProps.toDate]);
  var selectedTime = useMemo(function() {
    return selectedDate ? selectedDate.toFormat('HH:mm') : '00:00';
  }, [selectedDate]);
  var selectedToTime = useMemo(function() {
    return toDate ? toDate.toFormat('HH:mm') : '00:00';
  }, [toDate]);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      ' picker',
    jCss: jCss,
    ref: ref,
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'flex-column-no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'jCss',
    'onChange',
    'onToDateChange',
    'toDate',
    'useRange',
    'variant',
  ]), {
    children: _jsxs(DatePickerContextProvider, __assign({
      pickType: (_c = withProps.pickType) !== null && _c !== void 0 ? _c : DatePickerViewType.day,
      onChange: withProps.onChange,
      onChangeToDate: withProps.onToDateChange,
      selectedDate: selectedDate,
      selectedToDate: toDate,
      useRange: withProps.useRange
    }, {
      children: [_jsx(PickerControls, {
        className: 'controls'
      }), _jsx(PickerView, {
        className: 'calendar'
      }), withProps.withTime && (_jsxs(Box, __assign({
        variant: 'flex-row-no-padding'
      }, {
        children: [_jsx(TimePicker, {
          onChange: function(value) {
            if (!selectedDate) {
              withProps.onChange(undefined);
              return;
            }
            var date = "".concat(selectedDate.year, "-").concat(selectedDate.month,
              "-").concat(selectedDate.day);
            var newDate = new Date("".concat(date, " ").concat(value));
            withProps.onChange(DateTime.fromJSDate(newDate));
          },
          value: selectedTime
        }), withProps.useRange && (_jsxs(_Fragment, {
          children: [_jsx(Typography, {
            children: "\u00A0to\u00A0"
          }), _jsx(TimePicker, {
            onChange: function(value) {
              var _a;
              if (!toDate) {
                withProps.onChange(undefined);
                return;
              }
              var date = "".concat(toDate.year, "-").concat(toDate.month,
                "-").concat(toDate.day);
              var newDate = new Date("".concat(date, " ").concat(value));
              (_a = withProps.onToDateChange) === null || _a === void 0 ?
                void 0 : _a.call(withProps, DateTime.fromJSDate(newDate));
            },
            value: selectedToTime
          })]
        }))]
      })))]
    }))
  })));
});
DatePicker.displayName = DISPLAY_NAME;
export default DatePicker;
