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
  useContext,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';
import {
  FormattedMessage
} from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import ScrollBox from '../../components/ScrollBox';
import Typography from '../../components/Typography';
import {
  ScrollBoxControls
} from '../controls';
import {
  ScrollContext,
  ScrollContextProvider
} from '../../context/scroll';
Box.displayName = 'Box';
ScrollBox.displayName = 'ScrollBox';
var meta = {
  title: 'Core/Components/ScrollBox',
  component: ScrollBox,
  tags: ['autodocs'],
  argTypes: ScrollBoxControls,
};
export default meta;
var ScrollContextStory = function(props) {
  var scrollRef = useRef(null);
  return (_jsx(ScrollContextProvider, __assign({
    main: scrollRef
  }, {
    children: _jsx(ScrollBoxStory, __assign({
      ref: scrollRef
    }, props))
  })));
};
var ScrollBoxStory = forwardRef(function(props, ref) {
  var scroll = useContext(ScrollContext);
  var scrollRef = useRef(null);
  var ref1 = useRef(null);
  var ref2 = useRef(null);
  var ref3 = useRef(null);
  var ref4 = useRef(null);
  var ref5 = useRef(null);
  var ref6 = useRef(null);
  var ref7 = useRef(null);
  useImperativeHandle(ref, function() {
    if (!scrollRef.current) {
      return null;
    }
    return scrollRef.current.scrollBox.current;
  }, [scrollRef]);
  useEffect(function() {
    scroll.addRef('ref1', ref1);
    scroll.addRef('ref2', ref2);
    scroll.addRef('ref3', ref3);
    scroll.addRef('ref4', ref4);
    scroll.addRef('ref5', ref5);
    scroll.addRef('ref6', ref6);
    scroll.addRef('ref7', ref7);
  }, []);
  return (_jsx(Box, __assign({
    jCss: {
      height: '360px'
    }
  }, {
    children: _jsx(ScrollBox, __assign({
      ref: scrollRef
    }, props, {
      children: _jsxs(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: [_jsxs(Box, __assign({
          variant: 'flex-row'
        }, {
          children: [_jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref1');
            }
          }, {
            children: "1"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref2');
            }
          }, {
            children: "2"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref3');
            }
          }, {
            children: "3"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref4');
            }
          }, {
            children: "4"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref5');
            }
          }, {
            children: "5"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref6');
            }
          }, {
            children: "6"
          })), _jsx(Button, __assign({
            onClick: function() {
              return scroll.scrollToRef('ref7');
            }
          }, {
            children: "7"
          }))]
        })), _jsx(Typography, __assign({
          ref: ref1,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref2,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref3,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref4,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref5,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref6,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        })), _jsx("br", {}), _jsx(Typography, __assign({
          ref: ref7,
          variant: 'p'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'loreal-ipsum'
          })
        }))]
      }))
    }))
  })));
});
ScrollBoxStory.displayName = 'ScrollBoxStory';
export var Default = {
  args: {
    maxBoxSize: 360,
  },
  render: function(props) {
    return _jsx(ScrollContextStory, __assign({}, props));
  },
};
