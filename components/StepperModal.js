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
  useRef,
} from 'react';
import Box from './Box';
import Modal from './Modal';
import ScrollBox from './ScrollBox';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tStepperModal';
var StyledStepperModal = styled('div')({});
export var StepperModal = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var scrollRef = useRef(null);
  var stepsRef = useRef([]);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsxs(Modal, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef,
    "$bgColor": withProps.color,
    "$bgColorVariant": withProps.colorVariant
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: [_jsx(StyledStepperModal, __assign({
      className: 'steps'
    }, {
      children: withProps.steps.map(function(step, index) {
        return (_jsx(Box, __assign({
          className: 'step-indicator',
          onClick: function() {
            var _a;
            (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a
              .scrollTo$el(stepsRef.current[index]);
          }
        }, {
          children: index + 1
        }), index));
      })
    })), _jsx(ScrollBox, __assign({
      ref: scrollRef,
      className: 'content'
    }, withProps.scrollProps, {
      children: withProps.steps.map(function(step, index) {
        return (_jsxs(Box, __assign({
          ref: function(ref) {
            return stepsRef.current[index] = ref;
          },
          className: 'step',
          jCss: step.jCss,
          variant: 'auto-fit-no-padding'
        }, {
          children: [_jsx(Box, __assign({
            className: 'step-title',
            variant: 'auto-fit-no-padding'
          }, {
            children: step.title
          })), _jsx(Box, __assign({
            className: 'step-content',
            variant: 'auto-fit-no-padding'
          }, {
            children: step.content
          }))]
        }), index));
      })
    }))]
  })));
});
StepperModal.displayName = DISPLAY_NAME;
export default StepperModal;
