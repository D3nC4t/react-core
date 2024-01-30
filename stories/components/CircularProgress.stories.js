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
import CircularProgress from '../../components/CircularProgress';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import {
  appTheme
} from '../../theme';
import {
  CircularProgressControls
} from '../controls';
Box.displayName = 'Box';
CircularProgress.displayName = 'CircularProgress';
Typography.displayName = 'Typography';
var meta = {
  title: 'Core/Components/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  argTypes: CircularProgressControls
};
export default meta;
export var Default = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'some-text'
      })
    }))),
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    $groups.push(_jsxs(Box, __assign({
      jCss: {
        alignItems: 'start',
        border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape
          .border.shape, 'grey', 'darker'),
        padding: '1rem',
      },
      variant: 'flex-column'
    }, {
      children: [_jsx(Typography, __assign({
        variant: 'h4'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'color',
          values: {
            name: color
          }
        })
      })), _jsxs(Typography, __assign({
        variant: 'h6'
      }, {
        children: [_jsx(FormattedMessage, {
          id: 'default',
          values: {
            component: 'CircularProgress'
          }
        }), _jsx(CircularProgress, __assign({}, props, {
          color: color,
          value: 4
        }))]
      })), _jsxs(Typography, __assign({
        variant: 'h6'
      }, {
        children: [_jsx(FormattedMessage, {
          id: 'circular-progress.with-max',
          values: {
            number: 11
          }
        }), _jsx(CircularProgress, __assign({}, props, {
          color: color,
          max: 11,
          value: 1.21
        }))]
      })), _jsxs(Typography, __assign({
        variant: 'h6'
      }, {
        children: [_jsx(FormattedMessage, {
          id: 'circular-progress.with-min-and-max'
        }), _jsx(CircularProgress, __assign({}, props, {
          color: color,
          min: 1900,
          max: 2000,
          value: 1994
        }))]
      }))]
    }), color));
  }
  return (_jsx(LocaleProvider, __assign({
    module: 'storybook'
  }, {
    children: _jsx(Box, __assign({
      variant: 'flex-row'
    }, {
      children: $groups
    }))
  })));
};
export var Root = {
  args: {
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
