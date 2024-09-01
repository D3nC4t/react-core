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
import Box from '../../components/Box';
import DatePicker from '../../components/DatePicker';
import {
  DatePickerControls
} from '../controls';
import {
  DateTime
} from 'luxon';
import {
  useState
} from 'react';
Box.displayName = 'Box';
DatePicker.displayName = 'DatePicker';
var meta = {
  title: 'Core/Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: DatePickerControls,
};
export default meta;
export var Default = {
  args: {
    onChange: function(date) {
      console.log(date);
    }
  },
};
var DateTimePicker = function(props) {
  var _a = useState(DateTime.now()),
    date = _a[0],
    setDate = _a[1];
  return (_jsx(DatePicker, __assign({}, props, {
    selectedDate: date,
    onChange: function(selectedDate) {
      setDate(selectedDate);
      props.onChange(selectedDate);
    }
  })));
};
var DateRangePicker = function(props) {
  var _a = useState(DateTime.now()),
    date = _a[0],
    setDate = _a[1];
  var _b = useState(DateTime.now()),
    toDate = _b[0],
    setToDate = _b[1];
  return (_jsx(DatePicker, __assign({}, props, {
    selectedDate: date,
    toDate: toDate,
    onChange: function(selectedDate) {
      setDate(selectedDate);
      props.onChange(selectedDate);
    },
    onToDateChange: function(selectedDate) {
      var _a;
      setToDate(selectedDate);
      (_a = props.onToDateChange) === null || _a === void 0 ? void 0 : _a.call(props, selectedDate);
    }
  })));
};
export var WithTime = {
  args: {
    onChange: function(date) {
      console.log(date);
    },
    withTime: true,
  },
  render: DateTimePicker,
};
export var UseRange = {
  args: {
    onChange: function(date) {
      console.log('fromDate', date);
    },
    onToDateChange: function(date) {
      console.log('toDate', date);
    },
    useRange: true,
  },
  render: DateRangePicker,
};
export var UseRangeWithTime = {
  args: {
    onChange: function(date) {
      console.log('fromDate', date);
    },
    onToDateChange: function(date) {
      console.log('toDate', date);
    },
    useRange: true,
    withTime: true,
  },
  render: DateRangePicker,
};
