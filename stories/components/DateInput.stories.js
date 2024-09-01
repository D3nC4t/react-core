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
  useState
} from 'react';
import Box from '../../components/Box';
import DateInput from '../../components/DateInput';
import {
  DateInputControls
} from '../controls';
Box.displayName = 'Box';
DateInput.displayName = 'DateInput';
var meta = {
  title: 'Core/Components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: DateInputControls,
};
export default meta;
var DateInputMoc = function(props) {
  var _a = useState(undefined),
    date = _a[0],
    setDate = _a[1];
  return (_jsx(DateInput, __assign({}, props, {
    value: date,
    onChange: function(selectedDate) {
      setDate(selectedDate);
      props.onChange(selectedDate);
    }
  })));
};
export var Default = {
  args: {
    onChange: function(date) {
      console.log(date);
    },
  },
  render: DateInputMoc,
};
export var WithTime = {
  args: {
    onChange: function(date) {
      console.log(date);
    },
    withTime: true,
  },
  render: DateInputMoc,
};
