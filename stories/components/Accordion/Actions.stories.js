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
  FormattedMessage
} from 'react-intl';
import Box from '../../../components/Box';
import LocaleProvider from '../../../translations/component';
import {
  AccordionActions,
  Button
} from '../../../components';
import {
  appTheme
} from '../../../theme';
import {
  AccordionActionsControls
} from '../../controls';
Box.displayName = 'Box';
AccordionActions.displayName = 'AccordionActions';
var meta = {
  title: 'Core/Components/Accordion/Actions',
  component: AccordionActions,
  tags: ['autodocs'],
  argTypes: AccordionActionsControls,
};
export default meta;
export var Default = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(Button, __assign({
        onClick: function() {
          return alert('Accordion action');
        }
      }, {
        children: _jsx(FormattedMessage, {
          id: 'some-text'
        })
      }))
    }))),
    forceExpand: true,
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  var _loop_1 = function(color) {
    $groups.push(_jsx(Box, __assign({
      jCss: {
        alignItems: 'start',
        border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape
          .border.shape, 'grey', 'darker'),
        padding: '1rem',
      },
      variant: 'flex-column'
    }, {
      children: _jsx(AccordionActions, __assign({}, props, {
        color: color
      }, {
        children: _jsx(Button, __assign({
          color: color,
          onClick: function() {
            return alert("Action of color: ".concat(color));
          }
        }, {
          children: _jsx(FormattedMessage, {
            id: 'color',
            values: {
              name: color
            }
          })
        }))
      }))
    }), color));
  };
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    _loop_1(color);
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
    children: '',
    forceExpand: true,
  },
  render: renderThemeColorsAndMutations,
};
