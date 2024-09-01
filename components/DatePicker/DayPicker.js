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
  useContext,
  useMemo,
  useCallback,
} from 'react';
import {
  DateTime,
  Info
} from 'luxon';
import Box from '../Box';
import Button from '../Button';
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import {
  getClassName
} from '../../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../../theme';
import {
  DatePickerContext
} from '../../context/date-picker';
import Typography from '../Typography';
var DISPLAY_NAME = 'C4tDayPicker';
export var DayPicker = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useContext(DatePickerContext),
    defineToDate = _d.defineToDate,
    previewDate = _d.previewDate,
    selectDate = _d.selectDate,
    selectedDate = _d.selectedDate,
    toDate = _d.toDate,
    useRange = _d.useRange;
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var isToDateSelected = useCallback(function(date) {
    return !!toDate && date.year === toDate.year &&
      date.month === toDate.month &&
      date.day === toDate.day;
  }, [selectedDate, toDate]);
  var isDateSelected = useCallback(function(date) {
    var isSelected = !!selectedDate && date.year === selectedDate.year &&
      date.month === selectedDate.month &&
      date.day === selectedDate.day;
    return isSelected || isToDateSelected(date);
  }, [isToDateSelected, selectedDate]);
  var inRange = useCallback(function(date) {
    if (!selectedDate || !toDate) {
      return false;
    }
    return selectedDate.endOf('day') < date && date < toDate.startOf('day');
  }, [selectedDate, toDate]);
  var days = useMemo(function() {
    var days = [];
    var startOfMonth = DateTime.fromISO(previewDate.toString()).startOf('month');
    var endOfMonth = DateTime.fromISO(previewDate.toString()).endOf('month');
    var lastMonth = DateTime
      .fromISO(previewDate.toString())
      .minus({
        month: 1
      }).endOf('month');
    var lastDayPrevMonth = lastMonth.day;
    var daysBefore = startOfMonth.weekday - 1;
    var maxDays = 7 * 6;
    var afterDays = maxDays - daysBefore - endOfMonth.day;
    var beforeMonth = Array.from(Array(daysBefore).keys()).reverse();
    var inMonth = Array.from(Array(endOfMonth.day).keys());
    var afterMonth = Array.from(Array(afterDays).keys());
    for (var _i = 0, beforeMonth_1 = beforeMonth; _i < beforeMonth_1.length; _i++) {
      var i = beforeMonth_1[_i];
      var tmpDay = lastDayPrevMonth - i;
      var tmpDate = DateTime
        .fromJSDate(new Date("".concat(lastMonth.year, "-").concat(lastMonth.month, "-").concat(tmpDay,
          " 00:00:00")));
      days.push({
        afterMonth: false,
        beforeMonth: true,
        date: tmpDate,
        dayOfWeek: tmpDate.weekday,
        dayOfMonth: tmpDate.day,
        inRange: inRange(tmpDate),
        selected: isDateSelected(tmpDate),
      });
    }
    for (var _a = 0, inMonth_1 = inMonth; _a < inMonth_1.length; _a++) {
      var i = inMonth_1[_a];
      var tmpDay = 1 + i;
      var tmpDate = DateTime
        .fromJSDate(new Date("".concat(startOfMonth.year, "-").concat(startOfMonth.month, "-").concat(tmpDay,
          " 00:00:00")));
      days.push({
        afterMonth: false,
        beforeMonth: false,
        date: tmpDate,
        dayOfWeek: tmpDate.weekday,
        dayOfMonth: tmpDate.day,
        inRange: inRange(tmpDate),
        selected: isDateSelected(tmpDate),
      });
    }
    for (var _b = 0, afterMonth_1 = afterMonth; _b < afterMonth_1.length; _b++) {
      var i = afterMonth_1[_b];
      var tmpDay = 1 + i;
      var nextMonth = startOfMonth.month + 1;
      var tmpMonth = nextMonth > 12 ? nextMonth - 12 : nextMonth;
      var tmpYear = nextMonth > 12 ? startOfMonth.year + 1 : startOfMonth.year;
      var tmpDate = DateTime
        .fromJSDate(new Date("".concat(tmpYear, "-").concat(tmpMonth, "-").concat(tmpDay, " 00:00:00")));
      days.push({
        afterMonth: true,
        beforeMonth: false,
        date: tmpDate,
        dayOfWeek: tmpDate.weekday,
        dayOfMonth: tmpDate.day,
        inRange: inRange(tmpDate),
        selected: isDateSelected(tmpDate),
      });
    }
    return days;
  }, [selectedDate, toDate, previewDate]);
  var rows = useMemo(function() {
    var rows = [];
    var start = 0;
    do {
      var end = start + 7;
      rows.push(days.slice(start, end));
      start = end;
    } while (start < days.length);
    return rows;
  }, [days]);
  var weekDays = useMemo(function() {
    return Info.weekdays().map(function(day) {
      return day.substring(0, 3);
    });
  }, []);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref,
    tag: 'section',
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'flex-column-no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'jCss',
    'variant',
  ]), {
    children: [_jsx(Box, __assign({
      className: 'header',
      variant: 'flex-row-no-padding'
    }, {
      children: weekDays.map(function(weekDay) {
        return (_jsx(Typography, __assign({
          className: 'week-day'
        }, {
          children: weekDay
        }), weekDay));
      })
    })), rows.map(function(row, rIdx) {
      return (_jsx(Box, __assign({
        className: 'row',
        variant: 'flex-row-no-padding'
      }, {
        children: row.map(function(day) {
          return (_jsx(Button, __assign({
            className: 'day',
            "data-after": day.afterMonth,
            "data-before": day.beforeMonth,
            onClick: function() {
              if (!useRange) {
                selectDate(day.date);
                return;
              }
              switch (true) {
                case isToDateSelected(day.date):
                  defineToDate === null || defineToDate === void 0 ? void 0 :
                    defineToDate(undefined);
                  break;
                case isDateSelected(day.date):
                  if (toDate) {
                    selectDate(toDate);
                    defineToDate === null || defineToDate === void 0 ? void 0 :
                      defineToDate(undefined);
                  } else {
                    selectDate(undefined);
                  }
                  break;
                default:
                case toDate && day.date > toDate:
                  defineToDate === null || defineToDate === void 0 ? void 0 :
                    defineToDate(day.date);
                  break;
                case !selectedDate || selectedDate > day.date:
                  selectDate(day.date);
                  break;
                case selectedDate && !toDate:
                case selectedDate && selectedDate < day.date:
                  defineToDate === null || defineToDate === void 0 ? void 0 :
                    defineToDate(day.date);
                  break;
              }
            },
            light: day.inRange,
            variant: day.inRange || day.selected ? 'contained' : 'text'
          }, {
            children: day.dayOfMonth
          }), "".concat(rIdx, "-").concat(day.date.year, "-").concat(day.date.month,
            "-").concat(day.date.day)));
        })
      }), rIdx));
    })]
  })));
});
DayPicker.displayName = DISPLAY_NAME;
export default DayPicker;
