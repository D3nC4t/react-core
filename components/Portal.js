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
  Fragment as _Fragment,
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  createPortal
} from 'react-dom';
import Backdrop from './Backdrop';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDebouncedCallback
} from '../hooks';
import {
  useDefaultProps,
  useTheme
} from '../theme';
export var Portal = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g;
  var children = _a.children,
    _h = _a.name,
    name = _h === void 0 ? 'C4tPortal' : _h,
    open = _a.open,
    inputProps = __rest(_a, ["children", "name", "open"]);
  var theme = useTheme();
  var withProps = useDefaultProps(inputProps, name);
  var _j = useState(1500),
    fadeDuration = _j[0],
    setFadeDuration = _j[1];
  var _k = useState(true),
    isClosed = _k[0],
    setIsClosed = _k[1];
  var _l = useState(false),
    isOpen = _l[0],
    setIsOpen = _l[1];
  var _m = useState(false),
    fadeOpen = _m[0],
    setFadeOpen = _m[1];
  var updateRef = useDebouncedCallback((_b = withProps.updateRef) !== null && _b !== void 0 ? _b : (function() {}),
    [withProps.updateRef]);
  var portalRef = useRef(null);
  var innerRef = useRef(null);
  useImperativeHandle(ref, function() {
    if (portalRef.current) {
      portalRef.current.innerRef = innerRef;
      portalRef.current.closePortal = function() {
        return setIsOpen(false);
      };
      portalRef.current.openPortal = function() {
        return setFadeOpen(true);
      };
    }
    innerRef && (updateRef === null || updateRef === void 0 ? void 0 : updateRef());
    return portalRef.current;
  }, [
    isClosed,
    innerRef,
    innerRef.current,
    portalRef,
    portalRef.current,
    updateRef,
  ]);
  useEffect(function() {
    var state = open !== null && open !== void 0 ? open : false;
    setFadeOpen(state);
  }, [open]);
  useEffect(function() {
    var _a, _b;
    ((_a = withProps.$backdropProps) === null || _a === void 0 ? void 0 : _a.$fadeDuration) && setFadeDuration((
      _b = withProps.$backdropProps) === null || _b === void 0 ? void 0 : _b.$fadeDuration);
  }, [(_c = withProps.$backdropProps) === null || _c === void 0 ? void 0 : _c.$fadeDuration]);
  useEffect(function() {
    var _a, _b;
    var timeout = undefined;
    if (fadeOpen) {
      setIsClosed(false);
      timeout = setTimeout(function() {
        setIsOpen(true);
        setFadeOpen(false);
      }, 300);
    } else if (isOpen) {
      (_a = withProps.onOpen) === null || _a === void 0 ? void 0 : _a.call(withProps);
      setIsClosed(false);
    } else if (!isClosed && !isOpen) {
      (_b = withProps.onClose) === null || _b === void 0 ? void 0 : _b.call(withProps);
      timeout = setTimeout(function() {
        setIsClosed(true);
      }, fadeDuration);
    }
    return function() {
      timeout && clearTimeout(timeout);
    };
  }, [isClosed, isOpen, fadeDuration, fadeOpen, withProps.onClose]);
  return (_jsx(Box, __assign({
    variant: 'invisible',
    ref: portalRef
  }, {
    children: isClosed ? _jsx(_Fragment, {}) : createPortal(_jsx(Backdrop, __assign({}, withProps
      .$backdropProps, {
        in: isOpen,
        boxProps: __assign(__assign({}, ((_e = (_d = withProps.$backdropProps) === null || _d ===
          void 0 ? void 0 : _d.boxProps) !== null && _e !== void 0 ? _e : {})), {
          onClick: function(event) {
            var _a, _b, _c;
            if ((_a = withProps.$backdropProps) === null || _a === void 0 ? void 0 : _a
              .boxProps) {
              (_c = (_b = withProps.$backdropProps.boxProps).onClick) === null || _c ===
                void 0 ? void 0 : _c.call(_b, event);
            }
            setIsOpen(false);
          }
        }),
        ref: innerRef,
        "$fadeDuration": fadeDuration
      }, {
        children: _jsx(Box, __assign({
          className: getClassName(withProps, name, withProps.variant),
          name: name,
          onClick: function(event) {
            var _a;
            (_a = withProps.onClick) === null || _a === void 0 ? void 0 : _a.call(withProps,
              event);
            event.preventDefault();
            event.stopPropagation();
          },
          jCss: __assign(__assign({}, (withProps.$bShadow && {
            boxShadow: theme.get.shadow(withProps.$bShadow)
          })), ((_f = withProps.jCss) !== null && _f !== void 0 ? _f : {}))
        }, _objectWithoutProperties(withProps, [
          'className',
          'container',
          'jCss',
          'onClick',
          'onClose',
          'onOpen',
          'updateRef',
        ]), {
          children: children
        }))
      })), (_g = withProps.container) !== null && _g !== void 0 ? _g : document.body)
  })));
});
Portal.displayName = 'C4tPortal';
export default Portal;
