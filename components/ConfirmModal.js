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
var __rest = (this && this.__rest) || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import {
  jsx as _jsx,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Modal from './Modal';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useTheme,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tConfirmModal';
var ModalActions = styled('div')({});
var StyledConfirmModal = styled('div')({});
export var ConfirmModal = forwardRef(function(_a, ref) {
  var children = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var theme = useTheme();
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var actions = useMemo(function() {
    return [
      _jsx(Button, __assign({
        color: withProps.actionsColor,
        onClick: withProps.onCancel
      }, {
        children: "Cancel"
      }), 'cancel'),
      _jsx(Button, __assign({
        color: withProps.actionsColor,
        onClick: withProps.onConfirm,
        variant: 'contained',
        typographyProps: {
          color: theme.color.light.light
        }
      }, {
        children: "Confirm"
      }), 'confirm'),
    ];
  }, [
    withProps.actionsColor,
    withProps.onCancel,
    withProps.onConfirm
  ]);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsxs(Modal, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef,
    "$bgColor": withProps.color
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: [_jsx(StyledConfirmModal, __assign({
      className: 'content'
    }, {
      children: children
    })), _jsx(ModalActions, __assign({
      className: 'actions'
    }, {
      children: _jsx(ButtonGroup, __assign({
        color: withProps.actionsColor
      }, {
        children: actions
      }))
    }))]
  })));
});
ConfirmModal.displayName = DISPLAY_NAME;
export default ConfirmModal;
