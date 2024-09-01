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
} from 'react';
import Box from '../Box';
import DayPicker from './DayPicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
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
var DISPLAY_NAME = 'C4tPickerView';
export var PickerView = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useContext(DatePickerContext),
    inView = _d.inView,
    pickType = _d.pickType;
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
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
    children: [inView === DatePickerViewType.day && (_jsx(DayPicker, {})), inView === DatePickerViewType
      .month && (_jsx(MonthPicker, {
        forceDate: pickType === DatePickerViewType.month
      })), inView === DatePickerViewType.year && (_jsx(YearPicker, {
        forceDate: pickType === DatePickerViewType.year
      }))
    ]
  })));
});
PickerView.displayName = DISPLAY_NAME;
export default PickerView;
