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
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';
import Box from './Box';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var StyledDiv = styled('div')({
  content: '""',
});
export var ProgressBar = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? 'C4tProgressBar' : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useState(),
    progressWidth = _d[0],
    setProgressWidth = _d[1];
  var _e = useState(false),
    mounted = _e[0],
    setMounted = _e[1];
  var withProps = useDefaultProps(inputProps, name);
  var trackRef = useRef();
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var mountProgress = useCallback(function($el) {
    trackRef.current = $el;
    setMounted(function(mounted) {
      return !mounted;
    });
  }, []);
  useEffect(function() {
    setTimeout(function() {
      var _a, _b, _c, _d;
      if (!trackRef.current || !mounted) {
        setProgressWidth('0px');
        return;
      }
      var width = trackRef.current.clientWidth;
      var value = (_a = withProps.value) !== null && _a !== void 0 ? _a : 0;
      var maxRange = ((_b = withProps.max) !== null && _b !== void 0 ? _b : 100) - ((_c = withProps.min) !==
        null && _c !== void 0 ? _c : 0);
      var stepsCount = maxRange / ((_d = withProps.step) !== null && _d !== void 0 ? _d : 1);
      var stepSpacing = width / stepsCount;
      setProgressWidth("".concat(stepSpacing * value, "px"));
    }, 300);
  }, [
    mounted,
    trackRef,
    withProps.max,
    withProps.min,
    withProps.value,
  ]);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
  ]), {
    ref: ref
  }, {
    children: [withProps.title && (_jsx(Typography, __assign({
      className: getClassName(withProps, name, withProps.variant, 'title'),
      variant: 'p'
    }, {
      children: withProps.title
    }))), _jsx(StyledDiv, {
      className: getClassName(withProps, name, withProps.variant, 'track'),
      jCss: {
        width: '100%'
      },
      ref: mountProgress
    }), _jsx(StyledDiv, __assign({
      className: getClassName(withProps, name, withProps.variant, 'trail'),
      jCss: {
        width: progressWidth
      }
    }, {
      children: _jsx(StyledDiv, __assign({
        className: getClassName(withProps, name, withProps.variant, 'trail', 'thumb')
      }, {
        children: !withProps.hideProgress && !!withProps.value && (_jsx(Typography, __assign({
          className: getClassName(withProps, name, withProps.variant, 'progress'),
          variant: 'p'
        }, {
          children: withProps.value
        })))
      }))
    })), !withProps.hideProgress && !!withProps.value && (_jsxs(Typography, __assign({
      className: getClassName(withProps, name, withProps.variant, 'progress'),
      variant: 'p'
    }, {
      children: [withProps.value, (_b = withProps.symbol) !== null && _b !== void 0 ? _b : '%']
    })))]
  })));
});
ProgressBar.displayName = 'C4tProgressBar';
export default ProgressBar;
