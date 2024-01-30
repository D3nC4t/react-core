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
import ProgressBar from '../../components/ProgressBar';
import {
  appTheme
} from '../../theme';
import {
  ProgressBarControls
} from '../controls';
Box.displayName = 'Box';
ProgressBar.displayName = 'ProgressBar';
var meta = {
  title: 'Core/Components/ProgressBar',
  component: ProgressBar,
  tags: ['progress'],
  argTypes: ProgressBarControls,
};
export default meta;
export var Default = {
  args: {
    min: 1111111,
    max: 7777777,
    value: 4111994,
    symbol: ' of 7777777',
  },
};
var renderThemeColorsAndMutations = function(args) {
  var $groups = [];
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    var firstLetter = color[0].toUpperCase();
    var text = firstLetter + color.substring(1, color.length);
    $groups.push(_jsx(Box, __assign({
      jCss: {
        padding: '1rem',
        border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape
          .border.shape, 'grey', 'darker'),
      },
      variant: 'flex-column'
    }, {
      children: _jsx(ProgressBar, __assign({}, args, {
        color: color,
        title: text,
        symbol: ' of 11',
        value: 4,
        max: 11
      }))
    })));
  }
  return (_jsx(Box, __assign({
    variant: 'flex-row'
  }, {
    children: $groups
  })));
};
export var Root = {
  args: {
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
export var Contained = {
  args: {
    variant: 'contained',
  },
  render: renderThemeColorsAndMutations,
};
export var Dashed = {
  args: {
    variant: 'dashed',
  },
  render: renderThemeColorsAndMutations,
};
export var Dotted = {
  args: {
    variant: 'dotted',
  },
  render: renderThemeColorsAndMutations,
};
export var Outlined = {
  args: {
    variant: 'outlined',
  },
  render: renderThemeColorsAndMutations,
};
