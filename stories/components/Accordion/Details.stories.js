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
  AccordionDetails
} from '../../../components';
import {
  appTheme
} from '../../../theme';
import {
  AccordionDetailsControls
} from '../../controls';
Box.displayName = 'Box';
AccordionDetails.displayName = 'AccordionDetails';
var meta = {
  title: 'Core/Components/Accordion/Details',
  component: AccordionDetails,
  tags: ['autodocs'],
  argTypes: AccordionDetailsControls,
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
    forceExpand: true,
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
      children: _jsx(AccordionDetails, __assign({}, props, {
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
    variant: 'root',
    children: '',
    forceExpand: true,
  },
  render: renderThemeColorsAndMutations,
};
