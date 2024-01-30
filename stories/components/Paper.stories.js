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
import Paper from '../../components/Paper';
import LocaleProvider from '../../translations/component';
import {
  PaperControls
} from '../controls';
Paper.displayName = 'Paper';
var meta = {
  title: 'Core/Components/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: PaperControls,
};
export default meta;
export var Root = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.root'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'root'
        }
      })]
    }))),
    variant: 'root',
  },
};
export var Bordered = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.bordered'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'bordered'
        }
      })]
    }))),
    variant: 'bordered',
  },
};
export var RoundBordered = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.round-bordered'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'round-bordered'
        }
      })]
    }))),
    variant: 'round-bordered',
  },
};
export var Rounded = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.rounded'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'rounded'
        }
      })]
    }))),
    variant: 'rounded',
  },
};
export var RoundShadowed = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.round-shadowed'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'round-shadowed'
        }
      })]
    }))),
    variant: 'round-shadowed',
  },
};
export var Shadowed = {
  args: {
    children: (_jsxs(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: [_jsx(FormattedMessage, {
        id: 'paper.shadowed'
      }), _jsx(FormattedMessage, {
        id: 'variant',
        values: {
          name: 'shadowed'
        }
      })]
    }))),
    variant: 'shadowed',
  },
};
