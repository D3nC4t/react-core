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
  jsx as _jsx,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  FormattedMessage
} from 'react-intl';
import Box from '../../components/Box';
import Checkbox from '../../components/Checkbox';
import Typography from '../../components/Typography';
import LocaleProvider from '../../translations/component';
import {
  appTheme
} from '../../theme';
import {
  CheckboxControls
} from '../controls';
Checkbox.displayName = 'Checkbox';
var meta = {
  title: 'Core/Components/Checkbox',
  component: Checkbox,
  tags: ['checkbox', 'inputs'],
  argTypes: CheckboxControls,
};
export default meta;
export var Default = {
  args: {},
};
var renderThemeColorsAndMutations = function(props) {
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
        alignItems: 'start',
      },
      variant: 'flex-column'
    }, {
      children: _jsxs(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: [_jsxs(Typography, __assign({
          variant: 'h6',
          tag: 'div'
        }, {
          children: [_jsx(Checkbox, __assign({
            color: color
          }, props)), text]
        })), _jsxs(Typography, __assign({
          variant: 'h6',
          tag: 'div'
        }, {
          children: [_jsx(Checkbox, __assign({
            color: color,
            disabled: true
          }, props)), _jsx(FormattedMessage, {
            id: 'disabled'
          })]
        })), _jsxs(Typography, __assign({
          variant: 'h6',
          tag: 'div'
        }, {
          children: [_jsx(Checkbox, __assign({
            color: color,
            invalid: true
          }, props)), _jsx(FormattedMessage, {
            id: 'invalid'
          })]
        }))]
      }))
    }), color));
  }
  return (_jsx(Box, __assign({
    variant: 'flex-row'
  }, {
    children: $groups
  })));
};
export var Root = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
export var ContainedPlus = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'contained-plus',
  },
  render: renderThemeColorsAndMutations,
};
export var ContainedCheckmark = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'contained-checkmark',
  },
  render: renderThemeColorsAndMutations,
};
export var ContainedCross = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'contained-cross',
  },
  render: renderThemeColorsAndMutations,
};
export var ContainedMinus = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'contained-minus',
  },
  render: renderThemeColorsAndMutations,
};
export var OutlinedPlus = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'outlined-plus',
  },
  render: renderThemeColorsAndMutations,
};
export var OutlinedCheckmark = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'outlined-checkmark',
  },
  render: renderThemeColorsAndMutations,
};
export var OutlinedMinus = {
  args: {
    onChange: function(e, state) {
      return console.log(state);
    },
    variant: 'outlined-minus',
  },
  render: renderThemeColorsAndMutations,
};
