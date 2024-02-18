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
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  useState,
  useEffect
} from 'react';
import Fade from './Fade';
import {
  useDefaultProps
} from '../theme';
var DISPLAY_NAME = 'C4tBackdrop';
export var Backdrop = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g;
  var _h = _a.boxProps,
    boxProps = _h === void 0 ? {} : _h,
    children = _a.children,
    _j = _a.name,
    name = _j === void 0 ? DISPLAY_NAME : _j,
    inputProps = __rest(_a, ["boxProps", "children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var _k = useState(false),
    _in = _k[0],
    set_in = _k[1];
  useEffect(function() {
    var _a;
    set_in((_a = withProps.in) !== null && _a !== void 0 ? _a : true);
  }, [withProps.in]);
  return (_jsx(Fade, __assign({
    boxProps: boxProps,
    duration: withProps.$fadeDuration,
    in: _in,
    jCss: __assign(__assign(__assign(__assign({}, (withProps.$height &&
      !(withProps.$top && withProps.$bottom) &&
      {
        height: withProps.$height
      })), (withProps.$width &&
      !(withProps.$left && withProps.$right) &&
      {
        width: withProps.$width
      })), (withProps.variant === 'auto-fit' ? __assign(__assign(__assign(__assign({
      position: (_b = withProps.$position) !== null && _b !== void 0 ? _b : 'fixed'
    }, (withProps.$bottom && {
      bottom: withProps.$bottom
    })), (withProps.$left && {
      left: withProps.$left
    })), (withProps.$right && {
      right: withProps.$right
    })), (withProps.$top && {
      top: withProps.$top
    })) : {
      bottom: (_c = withProps.$bottom) !== null && _c !== void 0 ? _c : 0,
      left: (_d = withProps.$left) !== null && _d !== void 0 ? _d : 0,
      position: (_e = withProps.$position) !== null && _e !== void 0 ? _e : 'fixed',
      right: (_f = withProps.$right) !== null && _f !== void 0 ? _f : 0,
      top: (_g = withProps.$top) !== null && _g !== void 0 ? _g : 0,
    })), {
      backgroundColor: withProps.$invisible ?
        'transparent' :
        function(theme) {
          var _a, _b, _c;
          return theme.get.rgba(theme.get.color((_a = withProps.color) !== null && _a !== void 0 ? _a :
            '#000000', (_b = withProps.colorVariant) !== null && _b !== void 0 ? _b : 'main'), (_c =
            withProps.$opacity) !== null && _c !== void 0 ? _c : 0.25);
        },
      WebkitTapHighlightColor: 'transparent'
    }),
    name: name,
    ref: ref,
    variant: withProps.variant
  }, withProps.$fadeProps, {
    children: children
  })));
});
Backdrop.displayName = DISPLAY_NAME;
export default Backdrop;
