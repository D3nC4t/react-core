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
  useRef,
  useState
} from 'react';
import {
  FormattedMessage
} from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Drawer from '../../components/Drawer';
import LocaleProvider from '../../translations/component';
import {
  appTheme
} from '../../theme';
import {
  DrawerControls
} from '../controls';
Drawer.displayName = 'Drawer';
var meta = {
  title: 'Core/Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: DrawerControls,
};
export default meta;
export var Default = {
  args: {},
};
var WrappedDrawer = function(props) {
  var ref = useRef(null);
  var _a = useState(0),
    refresh = _a[0],
    setRefresh = _a[1];
  return (_jsx(LocaleProvider, __assign({
    module: 'storybook'
  }, {
    children: _jsxs(Box, {
      children: [refresh > 0 && _jsxs(Button, __assign({
        variant: 'contained',
        onClick: function() {
          var _a;
          (_a = ref.current) === null || _a === void 0 ? void 0 : _a.openPortal();
        }
      }, {
        children: [_jsx(FormattedMessage, {
          id: "drawer.open"
        }), " ", _jsx(FormattedMessage, {
          id: "drawer.".concat(props.variant)
        })]
      })), _jsx(Drawer, __assign({
        ref: ref
      }, props, {
        updateRef: function() {
          setRefresh(function(prev) {
            return prev + 1;
          });
        }
      }, {
        children: _jsx("span", {
          children: _jsx(FormattedMessage, {
            id: "drawer.".concat(props.variant)
          })
        })
      }))]
    })
  })));
};
export var Bottom = {
  args: {
    variant: 'bottom',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var BottomLeft = {
  args: {
    variant: 'bottom-left',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var BottomRight = {
  args: {
    variant: 'bottom-right',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
var verticalDrawerSpecs = appTheme.shape.drawer.vertical;
export var BottomRightWithAutoFit = {
  args: {
    variant: 'bottom-right',
    $backdropProps: {
      variant: 'auto-fit',
      $top: '0',
      $height: appTheme.get.rem(verticalDrawerSpecs.height, verticalDrawerSpecs.unit),
      $right: '0',
      $width: appTheme.get.rem(verticalDrawerSpecs.width, verticalDrawerSpecs.unit),
    },
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var Center = {
  args: {
    variant: 'center',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var Left = {
  args: {
    variant: 'left',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var Right = {
  args: {
    variant: 'right',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var Top = {
  args: {
    variant: 'top',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var TopRight = {
  args: {
    variant: 'top-right',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
export var TopLeft = {
  args: {
    variant: 'top-left',
  },
  render: function(props) {
    return _jsx(WrappedDrawer, __assign({}, props));
  },
};
