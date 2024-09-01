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
  AccordionSummary
} from '../../../components';
import {
  appTheme
} from '../../../theme';
import {
  AccordionSummaryControls
} from '../../controls';
Box.displayName = 'Box';
AccordionSummary.displayName = 'AccordionSummary';
var meta = {
  title: 'Core/Components/Accordion/Summary',
  component: AccordionSummary,
  tags: ['autodocs'],
  argTypes: AccordionSummaryControls,
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
    onClick: function() {
      return alert('expanded');
    },
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    $groups.push(_jsx(Box, __assign({
      jCss: {
        alignItems: 'start',
        border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape
          .border.shape, 'grey', 'darker'),
        padding: '1rem',
      },
      variant: 'flex-column'
    }, {
      children: _jsx(AccordionSummary, __assign({}, props, {
        color: color
      }, {
        children: _jsx(FormattedMessage, {
          id: 'color',
          values: {
            name: color
          }
        })
      }))
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
    children: '',
    variant: 'root',
    onClick: function() {
      return alert('expanded');
    },
  },
  render: renderThemeColorsAndMutations,
};
