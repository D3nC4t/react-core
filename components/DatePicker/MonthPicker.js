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
  useContext,
  useMemo,
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
  DatePickerContext,
  DatePickerViewType
} from '../../context/date-picker';
var DISPLAY_NAME = 'C4tMonthPicker';
export var MonthPicker = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useContext(DatePickerContext),
    definePreviewDate = _d.definePreviewDate,
    previewDate = _d.previewDate,
    pickType = _d.pickType,
    switchView = _d.switchView;
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var months = useMemo(function() {
    var monthsList = Info.months();
    var months = [];
    for (var _i = 0, _a = Array.from(Array(12).keys()); _i < _a.length; _i++) {
      var i = _a[_i];
      var tmpMonth = i + 1;
      var tmpDate = new Date("".concat(previewDate.year, "-").concat(tmpMonth, "-1"));
      var tmpDateTime = DateTime.fromJSDate(tmpDate);
      months.push({
        date: tmpDateTime,
        month: tmpMonth,
        text: monthsList[i].charAt(0).toUpperCase() + monthsList[i].slice(1),
      });
    }
    return months;
  }, []);
  var rows = useMemo(function() {
    var rows = [];
    var i = 0;
    do {
      var to = i + 3;
      rows.push(months.slice(i, to));
      i = to;
    } while (i < months.length);
    return rows;
  }, [months]);
  return (_jsx(Box, __assign({
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
    children: rows.map(function(row, rIdx) {
      return (_jsx(Box, __assign({
        className: 'row',
        variant: 'flex-row-no-padding'
      }, {
        children: row.map(function(month) {
          return (_jsx(Button, __assign({
            className: 'month',
            onClick: function() {
              var _a;
              definePreviewDate(month.date, (_a = withProps.forceDate) !== null &&
                _a !== void 0 ? _a : false);
              if (pickType === DatePickerViewType.day) {
                switchView(DatePickerViewType.day);
              }
            }
          }, {
            children: month.text
          }), "".concat(rIdx, "-").concat(month.month)));
        })
      }), rIdx));
    })
  })));
});
MonthPicker.displayName = DISPLAY_NAME;
export default MonthPicker;
