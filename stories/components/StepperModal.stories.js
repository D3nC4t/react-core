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
import StepperModal from '../../components/StepperModal';
import {
  StepperModalControls
} from '../controls';
Box.displayName = 'Box';
StepperModal.displayName = 'StepperModal';
var meta = {
  title: 'Core/Components/StepperModal',
  component: StepperModal,
  tags: ['autodocs'],
  argTypes: StepperModalControls,
};
export default meta;
export var Default = {
  args: {
    scrollProps: {
      maxBoxSize: 500,
    },
    steps: [{
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 1
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
      {
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 2
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
      {
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 3
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
      {
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 4
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
      {
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 5
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
      {
        title: (_jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: "step",
            values: {
              number: 6
            }
          })
        }))),
        content: (_jsx(Box, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: "loreal-ipsum"
            })
          }))
        })),
      },
    ],
  },
};
