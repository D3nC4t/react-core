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
  jsxs as _jsxs,
  jsx as _jsx,
  Fragment as _Fragment
} from "react/jsx-runtime";
import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import ConfirmModal from '../../components/ConfirmModal';
import {
  appTheme
} from '../../theme';
import {
  ConfirmModalControls
} from '../controls';
Box.displayName = 'Box';
ConfirmModal.displayName = 'ConfirmModal';
var meta = {
  title: 'Core/Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  argTypes: ConfirmModalControls,
};
export default meta;
var Modal = function(props) {
  var ref = React.createRef();
  return (_jsxs(_Fragment, {
    children: [_jsxs(Button, __assign({
      color: props.color,
      onClick: function() {
        var _a;
        return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.openPortal();
      }
    }, {
      children: ["Open ", props.color]
    })), _jsx(ConfirmModal, __assign({
      ref: ref
    }, props, {
      onCancel: function() {
        var _a, _b;
        alert('Canceled');
        (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.closePortal) === null ||
          _b === void 0 ? void 0 : _b.call(_a);
      },
      onConfirm: function() {
        var _a, _b;
        alert('Confirmed');
        (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.closePortal) === null ||
          _b === void 0 ? void 0 : _b.call(_a);
      },
      color: props.color
    }, {
      children: _jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'color',
          values: {
            name: props.color
          }
        })
      }))
    }))]
  }));
};
export var Default = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'some-text'
      })
    }))),
  },
  render: function(props) {
    return (_jsx(Modal, __assign({}, props)));
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
      children: _jsx(Modal, __assign({}, props, {
        color: color
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
  },
  render: renderThemeColorsAndMutations,
};
