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
import Box from '../../../components/Box';
import LocaleProvider from '../../../translations/component';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Button
} from '../../../components';
import {
  appTheme
} from '../../../theme';
import {
  AccordionGroupControls
} from '../../controls';
Box.displayName = 'Box';
AccordionGroup.displayName = 'AccordionGroup';
var meta = {
  title: 'Core/Components/Accordion/Group',
  component: AccordionGroup,
  tags: ['autodocs'],
  argTypes: AccordionGroupControls,
};
export default meta;
export var Default = {
  args: {
    items: [{
        groupName: 'Accordion Group 1',
        summary: (_jsx(AccordionSummary, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'some-text'
            })
          }))
        })),
        details: (_jsx(AccordionDetails, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'accordion.details'
            })
          }))
        })),
        actions: (_jsx(AccordionActions, {
          children: _jsx(Button, __assign({
            onClick: function() {
              return alert('Accordion Action 1');
            }
          }, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'accordion.action'
              })
            }))
          }))
        })),
      },
      {
        groupName: 'Accordion Group 2',
        summary: (_jsx(AccordionSummary, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'some-text'
            })
          }))
        })),
        details: (_jsx(AccordionDetails, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'accordion.details'
            })
          }))
        })),
        actions: (_jsx(AccordionActions, {
          children: _jsx(Button, __assign({
            onClick: function() {
              return alert('Accordion Action 2');
            }
          }, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'accordion.action'
              })
            }))
          }))
        })),
      },
      {
        groupName: 'Accordion Group 3',
        summary: (_jsx(AccordionSummary, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'some-text'
            })
          }))
        })),
        details: (_jsx(AccordionDetails, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'accordion.details'
            })
          }))
        })),
        actions: (_jsx(AccordionActions, {
          children: _jsx(Button, __assign({
            onClick: function() {
              return alert('Accordion Action 3');
            }
          }, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'accordion.action'
              })
            }))
          }))
        })),
      },
    ],
  },
};
var renderThemeColorsAndMutations = function(props) {
  var $groups = [];
  var _loop_1 = function(color) {
    $groups.push(_jsxs(Accordion, __assign({
      color: color,
      jCss: {
        alignItems: 'start',
        border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape
          .border.shape, 'grey', 'darker'),
        padding: '1rem',
      }
    }, {
      children: [_jsx(AccordionSummary, __assign({
        color: color
      }, {
        children: _jsx(FormattedMessage, {
          id: 'color',
          values: {
            name: color
          }
        })
      })), _jsx(AccordionDetails, __assign({
        color: color
      }, {
        children: _jsx(FormattedMessage, {
          id: 'accordion.details'
        })
      })), _jsx(AccordionActions, __assign({
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
      }))]
    }), color));
  };
  for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    _loop_1(color);
  }
  return (_jsx(LocaleProvider, __assign({
    module: 'storybook'
  }, {
    children: _jsx(AccordionGroup, __assign({}, props, {
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
