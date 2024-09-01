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
import {
  jsx as _jsx
} from "react/jsx-runtime";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  DateTime
} from 'luxon';
export var DatePickerViewType;
(function(DatePickerViewType) {
  DatePickerViewType["day"] = "day";
  DatePickerViewType["month"] = "month";
  DatePickerViewType["year"] = "year";
})(DatePickerViewType || (DatePickerViewType = {}));
export var DatePickerContext = createContext({
  definePreviewDate: function() {},
  inView: DatePickerViewType.day,
  minus: function(duration) {
    return DateTime.now().minus(duration);
  },
  pickType: DatePickerViewType.day,
  plus: function(duration) {
    return DateTime.now().plus(duration);
  },
  previewDate: DateTime.now(),
  selectDate: function() {},
  selectedDate: DateTime.now(),
  switchView: function() {},
});
export var DatePickerContextProvider = function(_a) {
  var children = _a.children,
    onChange = _a.onChange,
    onChangeToDate = _a.onChangeToDate,
    pickType = _a.pickType,
    selectedDate = _a.selectedDate,
    selectedToDate = _a.selectedToDate,
    useRange = _a.useRange;
  var _b = useState(selectedDate),
    date = _b[0],
    setDate = _b[1];
  var _c = useState(selectedToDate),
    toDate = _c[0],
    setToDate = _c[1];
  var _d = useState(DatePickerViewType.day),
    inView = _d[0],
    setInView = _d[1];
  var _e = useState(date !== null && date !== void 0 ? date : DateTime.now()),
    previewDate = _e[0],
    setPreviewDate = _e[1];
  var definePreviewDate = useCallback(function(date, setSelected) {
    if (setSelected === void 0) {
      setSelected = false;
    }
    setPreviewDate(function(prevState) {
      return date !== null && date !== void 0 ? date : prevState;
    });
    setSelected && setDate(function(prev) {
      var _a;
      if (!date || (prev && prev.toString() === date.toString())) {
        onChange === null || onChange === void 0 ? void 0 : onChange(undefined);
        return undefined;
      }
      var _date = date.toFormat('yyyy-MM-dd');
      var time = (_a = prev === null || prev === void 0 ? void 0 : prev.toFormat('HH:mm')) !== null && _a !==
        void 0 ? _a : DateTime.now().toFormat('HH:mm');
      onChange === null || onChange === void 0 ? void 0 : onChange(DateTime.fromJSDate(new Date("".concat(
        _date, " ").concat(time))));
      return date;
    });
  }, [onChange, toDate, useRange]);
  var defineToDate = useCallback(function(date) {
    setPreviewDate(function(prevState) {
      return date !== null && date !== void 0 ? date : prevState;
    });
    setToDate(function(prev) {
      var _a;
      if (!date || (prev && prev.toString() === date.toString())) {
        onChangeToDate === null || onChangeToDate === void 0 ? void 0 : onChangeToDate(undefined);
        return undefined;
      }
      var _date = date === null || date === void 0 ? void 0 : date.toFormat('yyyy-MM-dd');
      var time = (_a = prev === null || prev === void 0 ? void 0 : prev.toFormat('HH:mm')) !== null && _a !==
        void 0 ? _a : DateTime.now().toFormat('HH:mm');
      onChangeToDate === null || onChangeToDate === void 0 ? void 0 : onChangeToDate(DateTime.fromJSDate(
        new Date("".concat(_date, " ").concat(time))));
      return date;
    });
  }, []);
  var minus = useCallback(function(duration) {
    setPreviewDate(function(previewDate) {
      return previewDate.minus(duration);
    });
  }, []);
  var plus = useCallback(function(duration) {
    setPreviewDate(function(previewDate) {
      return previewDate.plus(duration);
    });
  }, []);
  var selectDate = useCallback(function(date) {
    definePreviewDate(date, true);
  }, [definePreviewDate]);
  var switchView = useCallback(function(viewType) {
    setInView(viewType);
  }, []);
  var data = useMemo(function() {
    return ({
      definePreviewDate: definePreviewDate,
      defineToDate: defineToDate,
      inView: inView,
      minus: minus,
      pickType: pickType,
      plus: plus,
      previewDate: previewDate,
      selectDate: selectDate,
      selectedDate: date,
      switchView: switchView,
      toDate: toDate,
      useRange: useRange,
    });
  }, [
    date,
    definePreviewDate,
    defineToDate,
    inView,
    minus,
    pickType,
    plus,
    previewDate,
    selectDate,
    switchView,
    toDate,
    useRange,
  ]);
  useEffect(function() {
    setDate(selectedDate);
  }, [selectedDate]);
  useEffect(function() {
    setToDate(selectedToDate);
  }, [selectedToDate]);
  return (_jsx(DatePickerContext.Provider, __assign({
    value: data
  }, {
    children: children
  })));
};
