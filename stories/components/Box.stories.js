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
import LocaleProvider from '../../translations/component';
import {
  BoxControls
} from '../controls';
Box.displayName = 'Box';
var meta = {
  title: 'Core/Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: BoxControls,
};
export default meta;
export var Default = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'box.default-box'
      })
    }))),
  },
};
export var Root = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
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
};
export var AutoFit = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'auto-fit'
        }
      })
    }))),
    variant: 'auto-fit',
  },
};
export var AutoFitNoPadding = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'auto-fit-no-padding'
        }
      })
    }))),
    variant: 'auto-fit-no-padding',
  },
};
export var Centered = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'centered'
        }
      })
    }))),
    variant: 'centered',
  },
};
export var FlexColumn = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx("span", {
        children: _jsx(FormattedMessage, {
          id: 'box.flex-column'
        })
      }), _jsx("span", {
        children: _jsx(FormattedMessage, {
          id: 'variant',
          values: {
            name: 'flex-column'
          }
        })
      })]
    }))),
    variant: 'flex-column',
  },
};
export var FlexRow = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx("span", {
        children: _jsx(FormattedMessage, {
          id: 'box.flex-row'
        })
      }), _jsx("span", {
        children: _jsx(FormattedMessage, {
          id: 'variant',
          values: {
            name: 'flex-row'
          }
        })
      })]
    }))),
    variant: 'flex-row',
  },
};
export var Bordered = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'bordered'
        }
      })
    }))),
    variant: 'bordered',
  },
};
export var NoPadding = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'no-padding'
        }
      })
    }))),
    variant: 'no-padding',
  },
};
