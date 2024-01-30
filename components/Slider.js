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
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDebouncedCallback
} from '../hooks';
import {
  useDefaultProps,
  useTheme,
  useVariantJCss
} from '../theme';
var StyledSpan = styled('span')({
  position: 'absolute',
});
export var Slider = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e;
  var _f = _a.name,
    name = _f === void 0 ? 'C4tSlider' : _f,
    value = _a.value,
    inputProps = __rest(_a, ["name", "value"]);
  var theme = useTheme();
  var withProps = useDefaultProps(inputProps, name);
  var _g = useState(false),
    isLoaded = _g[0],
    setIsLoaded = _g[1];
  var _h = useState(0),
    currentValue = _h[0],
    setCurrentValue = _h[1];
  var _j = useState([]),
    marks = _j[0],
    setMarks = _j[1];
  var innerRef = useRef();
  var trackRef = useRef(null);
  var isScrolling = useRef();
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var handleOnChange = useDebouncedCallback(function(value) {
    var _a;
    (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, value);
  }, [withProps.onChange], 300);
  var updateTrack = useCallback(function(currentValue, marks) {
    var selectedMark = marks
      .find(function(mark) {
        return mark.value === currentValue;
      });
    if (!selectedMark || !trackRef.current) {
      return;
    }
    var track = trackRef.current;
    track.style.width = theme.get.rem(selectedMark.from0, 'px');
  }, [trackRef]);
  var updateMarks = useCallback(function(currentValue) {
    var _a, _b, _c, _d, _e;
    if (!isLoaded || !innerRef.current) {
      return;
    }
    var marks = [];
    var width = innerRef.current.clientWidth;
    var maxRange = ((_a = withProps.max) !== null && _a !== void 0 ? _a : 100) - ((_b = withProps.min) !==
      null && _b !== void 0 ? _b : 0);
    var stepsCount = maxRange / ((_c = withProps.step) !== null && _c !== void 0 ? _c : 1);
    var dotSpacing = theme.spacing.xs / stepsCount;
    var stepSpacing = (width / stepsCount) - dotSpacing;
    for (var key in Array.from(new Array(stepsCount + 1))) {
      var step = parseInt(key);
      var value_1 = ((_d = withProps.min) !== null && _d !== void 0 ? _d : 0) + (step * ((_e = withProps
        .step) !== null && _e !== void 0 ? _e : 1));
      var from0 = step * stepSpacing;
      marks.push({
        from0: from0,
        step: step,
        value: value_1,
        $el: (_jsx(StyledSpan, __assign({
          className: getClassName(withProps, name, withProps.variant, 'mark') +
            (value_1 === currentValue ? ' hide-mark' : ''),
          style: {
            left: theme.get.rem(from0, 'px')
          }
        }, {
          children: _jsx(StyledSpan, __assign({
            className: getClassName(withProps, name, withProps.variant, 'mark__text') +
              (value_1 === currentValue ? ' in-range' : '')
          }, {
            children: value_1
          }))
        }), step)),
      });
    }
    setMarks(withProps.marks ? marks : []);
    updateTrack(currentValue, marks);
  }, [isLoaded, ref, theme.get.rem, theme.spacing.xs, updateTrack, withProps.marks, withProps.step]);
  var handleMouseMove = useCallback(function(clientX) {
    var _a, _b, _c, _d, _e, _f;
    var box = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    if (!box || !isScrolling.current) {
      return;
    }
    if (clientX > box.right || clientX < box.left) {
      return;
    }
    var percentage = (clientX - box.left) / box.width;
    var multiplier = ((_b = withProps.max) !== null && _b !== void 0 ? _b : 100) - ((_c = withProps.min) !==
      null && _c !== void 0 ? _c : 0);
    var steps = Math.round(percentage * multiplier / ((_d = withProps.step) !== null && _d !== void 0 ? _d :
    1));
    var value = ((_e = withProps.min) !== null && _e !== void 0 ? _e : 0) + (steps * ((_f = withProps.step) !==
      null && _f !== void 0 ? _f : 1));
    handleOnChange === null || handleOnChange === void 0 ? void 0 : handleOnChange(value);
    setCurrentValue(value);
    updateMarks(value);
  }, [
    isScrolling,
    innerRef,
    ref,
    updateMarks,
    withProps.step,
    withProps.max,
    withProps.min,
  ]);
  var refCallback = useCallback(function(node) {
    innerRef.current = node;
    setIsLoaded(function(state) {
      return !state;
    });
  }, []);
  useLayoutEffect(function() {
    updateMarks(currentValue);
  }, [currentValue, updateMarks]);
  useEffect(function() {
    var _a;
    setCurrentValue((_a = value !== null && value !== void 0 ? value : withProps.min) !== null && _a !==
      void 0 ? _a : 0);
  }, [value, withProps.min]);
  useEffect(function() {
    var handleMouseUp = function() {
      isScrolling.current = false;
    };
    window.addEventListener('mouseup', handleMouseUp);
    return function() {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant) +
      (withProps.disabled ? ' disabled' : ''),
    jCss: __assign(__assign({}, jCss), {
      position: 'relative',
      width: '100%'
    }),
    onMouseDown: function(event) {
      event.preventDefault();
      if (withProps.disabled) {
        return;
      }
      isScrolling.current = true;
      handleMouseMove(event.clientX);
    },
    onMouseMove: function(event) {
      !withProps.disabled && handleMouseMove(event.clientX);
    },
    ref: refCallback,
    variant: (_b = withProps === null || withProps === void 0 ? void 0 : withProps.boxVariant) !== null &&
      _b !== void 0 ? _b : 'auto-fit-no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'disabled',
    'inputName',
    'jCss',
    'marks',
    'onChange',
    'variant',
    'value',
  ]), {
    children: [_jsx(StyledSpan, {
      className: getClassName(withProps, name, withProps.variant, 'rail')
    }), isLoaded && (_jsxs(_Fragment, {
      children: [_jsx(StyledSpan, __assign({
        className: getClassName(withProps, name, withProps.variant, 'track'),
        ref: trackRef
      }, {
        children: _jsx(StyledSpan, {
          className: getClassName(withProps, name, withProps.variant, 'track__thumb')
        })
      })), marks.map(function(mark) {
        return mark.$el;
      })]
    })), _jsx("input", {
      min: (_c = withProps.min) !== null && _c !== void 0 ? _c : 0,
      max: (_d = withProps.max) !== null && _d !== void 0 ? _d : 100,
      name: (_e = withProps.inputName) !== null && _e !== void 0 ? _e : name,
      readOnly: true,
      style: {
        display: 'none'
      },
      type: 'range',
      value: currentValue
    })]
  })));
});
Slider.displayName = 'C4tSlider';
export default Slider;
