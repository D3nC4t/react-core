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
  useMemo,
  useRef,
} from 'react';
import {
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons';
import Avatar from './Avatar';
import Button from './Button';
import CircularLoading from './CircularLoading';
import Icon from './Icon';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import validateChildComponent from '../utils/validateChildComponent';
import {
  throwError
} from '../error';
var DISPLAY_NAME = 'C4tChip';
export var Chip = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["name"]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var $el = useMemo(function() {
    var _a, _b, _c;
    var $prepend = null;
    var removeIcon = (_a = withProps.removeIcon) !== null && _a !== void 0 ? _a : faCircleXmark;
    var tag = withProps.component || 'div';
    var StyledTag = styled(tag)({});
    if (withProps.prepend) {
      if (validateChildComponent('Chip', withProps.prepend, 'Avatar', Avatar, true) ||
        validateChildComponent('Chip', withProps.prepend, 'Icon', Icon, true)) {
        $prepend = withProps.prepend;
      } else if (process.env.NODE_ENV !== 'production') {
        throwError('COT-2002').then(function() {});
      }
    }
    var $removeIcon = withProps.onRemove ? (_jsx(Button, __assign({
      variant: 'icon',
      onClick: function(event) {
        var _a;
        return (_a = withProps.onRemove) === null || _a === void 0 ? void 0 : _a.call(withProps,
          event);
      }
    }, {
      children: _jsx(Icon, {
        className: getClassName(withProps, name, withProps.variant, 'remove-icon'),
        color: (_b = withProps.removeColor) !== null && _b !== void 0 ? _b : 'primary',
        colorVariant: (_c = withProps.removeColorVariant) !== null && _c !== void 0 ? _c : 'dark',
        icon: removeIcon
      })
    }))) : _jsx(_Fragment, {});
    return (_jsxs(StyledTag, __assign({
      className: getClassName(withProps, name, withProps.variant),
      jCss: jCss,
      name: name
    }, _objectWithoutProperties(withProps, [
      'className',
      'component',
      'jCss',
      'label',
      'onRemove',
      'prepend',
      'removeColor',
      'removeIcon',
    ]), {
      children: [$prepend, _jsx(Typography, __assign({
        className: getClassName(withProps, name, withProps.variant, 'label'),
        variant: 'p'
      }, {
        children: withProps.label
      })), $removeIcon]
    })));
  }, [withProps, jCss]);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return $el !== null && $el !== void 0 ? $el : _jsx(CircularLoading, {
    variant: (_b = withProps.loadingVariant) !== null && _b !== void 0 ? _b : 'root'
  });
});
Chip.displayName = DISPLAY_NAME;
export default Chip;
