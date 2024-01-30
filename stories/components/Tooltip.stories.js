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
import Box from '../../components/Box';
import LocaleProvider from '../../translations/component';
import Tooltip from '../../components/Tooltip';
import {
  appTheme
} from '../../theme';
import {
  TooltipControls
} from '../controls';
Box.displayName = 'Box';
Tooltip.displayName = 'Tooltip';
var meta = {
  title: 'Core/Components/Tooltip',
  component: Tooltip,
  tags: ['tooltip'],
  argTypes: TooltipControls,
};
export default meta;
export var Default = {
  args: {
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'Box'
        }
      })
    }))),
    children: _jsx(Box, __assign({
      variant: 'auto-fit-no-padding'
    }, {
      children: "Hover me"
    })),
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    $groups.push(_jsx(Tooltip, __assign({
      color: color
    }, props, {
      children: _jsx(FormattedMessage, {
        id: 'color',
        values: {
          name: color
        }
      })
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
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'root'
        }
      })
    }))),
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
export var Contained = {
  args: {
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'contained'
        }
      })
    }))),
    variant: 'contained',
  },
  render: renderThemeColorsAndMutations,
};
export var Dashed = {
  args: {
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'dashed'
        }
      })
    }))),
    variant: 'dashed',
  },
  render: renderThemeColorsAndMutations,
};
export var Dotted = {
  args: {
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'dotted'
        }
      })
    }))),
    variant: 'dotted',
  },
  render: renderThemeColorsAndMutations,
};
export var Outlined = {
  args: {
    tooltip: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'outlined'
        }
      })
    }))),
    variant: 'outlined',
  },
  render: renderThemeColorsAndMutations,
};
