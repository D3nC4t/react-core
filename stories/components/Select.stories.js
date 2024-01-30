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
import {
  faHome
} from '@fortawesome/free-solid-svg-icons';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import LocaleProvider from '../../translations/component';
import Select from '../../components/Select';
import Typography from '../../components/Typography';
import {
  appTheme
} from '../../theme';
import {
  SelectControls
} from '../controls';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Select.displayName = 'Select';
var meta = {
  title: 'Core/Components/Select',
  component: Select,
  tags: ['select'],
  argTypes: SelectControls,
};
export default meta;
export var Default = {
  args: {
    children: [
      _jsx("span", {
        children: _jsxs(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: [_jsx(Icon, {
            icon: faHome,
            style: {
              paddingRight: '0.25rem'
            }
          }), _jsx(FormattedMessage, {
            id: 'select.long-option',
            values: {
              index: 1
            }
          })]
        }))
      }, 'test1'),
      _jsx("span", {
        children: _jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'select.long-option',
            values: {
              index: 2
            }
          })
        }))
      }, 'test2'),
      _jsx("span", {
        children: _jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'select.long-option',
            values: {
              index: 3
            }
          })
        }))
      }, 'test3')
    ],
    onChange: function(selected) {
      return console.log(selected);
    },
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  !props.children && (props.children = [
    _jsx("span", {
      children: _jsx(FormattedMessage, {
        id: 'select.test-option',
        values: {
          index: 1
        }
      })
    }, 'test1'),
    _jsx("span", {
      children: _jsx(FormattedMessage, {
        id: 'select.test-option',
        values: {
          index: 2
        }
      })
    }, 'test2'),
    _jsx("span", {
      children: _jsx(FormattedMessage, {
        id: 'select.test-option',
        values: {
          index: 3
        }
      })
    }, 'test3'),
  ]);
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    var firstLetter = color[0].toUpperCase();
    var text = firstLetter + color.substring(1, color.length);
    $groups.push(_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsxs(Box, __assign({
        jCss: {
          padding: '1rem',
          border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme
            .shape.border.shape, 'grey', 'darker'),
        },
        variant: 'flex-column'
      }, {
        children: [text, _jsxs(Typography, __assign({
          variant: 'p'
        }, {
          children: [_jsx(FormattedMessage, {
            id: 'select.mutation.single'
          }), _jsx(Select, __assign({
            color: color,
            value: 'test1'
          }, props, {
            children: props.children
          }))]
        })), _jsxs(Typography, __assign({
          variant: 'p'
        }, {
          children: [_jsx(FormattedMessage, {
            id: 'select.mutation.multiple'
          }), _jsx(Select, __assign({
            color: color,
            multiple: true,
            value: ['test1', 'test3']
          }, props, {
            children: props.children
          }))]
        })), _jsxs(Typography, __assign({
          variant: 'p'
        }, {
          children: [_jsx(FormattedMessage, {
            id: 'disabled'
          }), _jsx(Select, __assign({
            color: color,
            disabled: true,
            value: 'test1'
          }, props, {
            children: props.children
          }))]
        })), _jsxs(Typography, __assign({
          variant: 'p'
        }, {
          children: [_jsx(FormattedMessage, {
            id: 'invalid'
          }), _jsx(Select, __assign({
            color: color,
            invalid: true,
            value: 'test1'
          }, props, {
            children: props.children
          }))]
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
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'root',
  },
  render: renderThemeColorsAndMutations,
};
export var Contained = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'contained',
  },
  render: renderThemeColorsAndMutations,
};
export var Dashed = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'dashed',
  },
  render: renderThemeColorsAndMutations,
};
export var Dotted = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'dotted',
  },
  render: renderThemeColorsAndMutations,
};
export var Outlined = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'outlined',
  },
  render: renderThemeColorsAndMutations,
};
export var OutlinedSandwich = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'outlined-sandwich',
  },
  render: renderThemeColorsAndMutations,
};
export var Rounded = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'rounded',
  },
  render: renderThemeColorsAndMutations,
};
export var RoundContained = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'round-contained',
  },
  render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'round-outlined',
  },
  render: renderThemeColorsAndMutations,
};
export var Sandwich = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'sandwich',
  },
  render: renderThemeColorsAndMutations,
};
export var Shadowed = {
  args: {
    onChange: function(selected) {
      return console.log(selected);
    },
    usePopover: true,
    variant: 'shadowed',
  },
  render: renderThemeColorsAndMutations,
};
