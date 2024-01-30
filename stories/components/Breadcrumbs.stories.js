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
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import {
  appTheme
} from '../../theme';
import {
  BreadcrumbsControls
} from '../controls';
Box.displayName = 'Box';
Breadcrumbs.displayName = 'Breadcrumbs';
Link.displayName = 'Link';
Typography.displayName = 'Typography';
var meta = {
  title: 'Core/Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: BreadcrumbsControls,
};
export default meta;
var crumbs = [
  _jsx(Link, __assign({
    href: '/'
  }, {
    children: _jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'breadcrumbs.home'
      })
    }))
  }), 'home'),
  _jsx(Link, __assign({
    href: '/123'
  }, {
    children: "123"
  }), '123'),
  _jsx(Link, __assign({
    href: '/test'
  }, {
    children: "Test"
  }), 'test'),
];
export var Default = {
  args: {
    active: 1,
    children: crumbs,
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
      children: [_jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(Typography, __assign({
          variant: 'h4',
          tag: 'div'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'examples.color',
            values: {
              name: color
            }
          })
        }))
      })), _jsx(Breadcrumbs, __assign({}, props, {
        color: color
      }, {
        children: crumbs
      }))]
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
    active: 1,
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
