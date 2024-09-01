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
  Fragment as _Fragment,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import Input from './Input';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';
import {
  throwError
} from '../error';
import Button from './Button';
var DISPLAY_NAME = 'C4tDynamicForm';
export var DynamicForm = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var renderInput = useCallback(function(index, input) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var input$el;
    var label = 'label' in input ? (_jsx("label", __assign({
      htmlFor: input.key
    }, {
      children: input.label
    }))) : undefined;
    switch (input.type) {
      case 'row':
        input$el = (_jsx(Box, __assign({
          jCss: input.jCss,
          variant: 'flex-row-no-padding'
        }, {
          children: input.inputs.map(function(input, index) {
            return renderInput(index, input);
          })
        }), index));
        break;
      case 'text':
      case 'url':
        input$el = (_jsx(Input, __assign({
          inputName: input.key,
          jCss: input.jCss,
          type: "text",
          value: (_a = input.value) !== null && _a !== void 0 ? _a : input.initialValue,
          placeholder: input.placeholder
        }, input.props, {
          onChange: function(event) {
            return input.onChange(event.target.value);
          }
        })));
        break;
      case 'email':
        input$el = (_jsx(Input, __assign({
          inputName: input.key,
          jCss: input.jCss,
          type: 'email',
          value: (_b = input.value) !== null && _b !== void 0 ? _b : input.initialValue,
          placeholder: input.placeholder
        }, input.props, {
          onChange: function(event) {
            return input.onChange(event.target.value);
          }
        })));
        break;
      case 'number':
        input$el = (_jsx(Input, __assign({
          inputName: input.key,
          jCss: input.jCss,
          type: 'number',
          value: (_c = input.value) !== null && _c !== void 0 ? _c : input.initialValue,
          placeholder: input.placeholder
        }, input.props, {
          onChange: function(event) {
            return input.onChange(parseInt(event.target.value, 10));
          }
        })));
        break;
      case 'password':
        input$el = (_jsx(Input, __assign({
          inputName: input.key,
          jCss: input.jCss,
          type: 'password',
          value: (_d = input.value) !== null && _d !== void 0 ? _d : input.initialValue,
          placeholder: input.placeholder
        }, input.props, {
          onChange: function(event) {
            return input.onChange(event.target.value);
          }
        })));
        break;
      case 'checkbox':
        input$el = (_jsx(Checkbox, {
          inputName: input.key,
          jCss: input.jCss,
          value: (_e = input.value) !== null && _e !== void 0 ? _e : input.initialValue,
          onChange: function(event, status) {
            input.onChange(status);
          }
        }));
        break;
      case 'radio':
        input$el = (_jsx(Radio, {
          inputName: input.key,
          jCss: input.jCss,
          value: (_f = input.value) !== null && _f !== void 0 ? _f : input.initialValue,
          onChange: function(event, status) {
            input.onChange(status);
          }
        }));
        break;
      case 'select':
        input$el = (_jsx(Select, __assign({
          inputName: input.key,
          jCss: input.jCss,
          value: (_g = input.value) !== null && _g !== void 0 ? _g : input.initialValue
        }, input.props, {
          onChange: function(selected) {
            if (Array.isArray(selected)) {
              throwError('OT-2009').then(function() {});
            }
            input.onChange(selected);
          }
        }, {
          children: input.options.map(function(option) {
            return _jsx(Box, {
              children: option
            }, option);
          })
        })));
        break;
      case 'multi-select':
        input$el = (_jsx(Select, __assign({
          inputName: input.key,
          jCss: input.jCss,
          value: (_h = input.value) !== null && _h !== void 0 ? _h : input.initialValue,
          multiple: true
        }, input.props, {
          onChange: function(selected) {
            if (typeof selected === 'string') {
              throwError('OT-2010').then(function() {});
            }
            input.onChange(selected);
          }
        }, {
          children: input.options.map(function(option) {
            return _jsx(Box, {
              children: option
            }, option);
          })
        })));
        break;
      case 'button':
      case 'reset':
      case 'submit':
        label = undefined;
        input$el = (_jsx(Button, __assign({
          jCss: input.jCss,
          onClick: function() {
            return input.onClick();
          }
        }, {
          children: input.label
        }), input.key));
        break;
      case 'hidden':
      default:
        input$el = _jsx(_Fragment, {});
        break;
    }
    return (_jsxs(Box, __assign({}, input.boxProps, {
      children: [label, input$el]
    }), index));
  }, []);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: withProps.form.map(function(input, index) {
      return renderInput(index, input);
    })
  })));
});
DynamicForm.displayName = DISPLAY_NAME;
export default DynamicForm;
