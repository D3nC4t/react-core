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
var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
import {
  jsx as _jsx,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {
  faAngleDown,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import Box from './Box';
import Icon from './Icon';
import LocaleProvider from '../translations/component';
import Paper from './Paper';
import Popover from './Popover';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useTheme,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tSelect';
var StyledBox = styled(Box)({
  position: 'relative'
});
var StyledSelectOptions = styled(Paper)({
  left: 0,
  position: 'absolute',
  top: '100%',
});
var StyledSelectInput = styled('section')({
  left: 0,
  position: 'absolute',
  top: 0,
});
var StyledIcon = styled('i')({
  position: 'relative'
});
export var Select = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
  var children = _a.children,
    _u = _a.name,
    name = _u === void 0 ? DISPLAY_NAME : _u,
    _v = _a.value,
    value = _v === void 0 ? [] : _v,
    _w = _a.usePopover,
    usePopover = _w === void 0 ? false : _w,
    inputProps = __rest(_a, ["children", "name", "value", "usePopover"]);
  var theme = useTheme();
  var _x = useState([]),
    selected = _x[0],
    setSelected = _x[1];
  var _y = useState(false),
    rejectValue = _y[0],
    setRejectValue = _y[1];
  var _z = useState(undefined),
    selected$el = _z[0],
    setSelected$el = _z[1];
  var _0 = useState(false),
    setupRef = _0[0],
    setSetupRef = _0[1];
  var _1 = useState(false),
    showOptions = _1[0],
    setShowOptions = _1[1];
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var optionsRef = useRef(null);
  var inputRef = useRef(null);
  var outerRef = useRef(null);
  var popoverRef = useRef(null);
  var baseClassName = "".concat(name, "-").concat((_b = withProps.variant) !== null && _b !== void 0 ? _b : 'root');
  var optionsClassName = "".concat(baseClassName, "__options");
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    var $el = outerRef.current;
    if ($el) {
      $el.innerRef = innerRef.current;
      $el.inputRef = inputRef.current;
      $el.optionsRef = optionsRef.current;
      $el.popoverRef = popoverRef.current;
    }
    return $el;
  }, [
    innerRef, innerRef.current,
    inputRef, inputRef.current,
    optionsRef, optionsRef.current,
    popoverRef, popoverRef.current,
    setupRef,
  ]);
  useEffect(function() {
    !rejectValue && setSelected(Array.isArray(value) ? value : [value]);
  }, [rejectValue, value]);
  useEffect(function() {
    if (outerRef.current && innerRef.current) {
      outerRef.current.style.height = "".concat(innerRef.current.clientHeight + theme.spacing.xxs, "px");
      if (optionsRef.current) {
        optionsRef.current.style.top = "".concat(outerRef.current.clientHeight, "px");
      }
      setSetupRef(true);
    }
  });
  var $options = children.map(function($el) {
    var _a, _b, _c, _d, _e;
    if (!selected$el && selected[0] && selected.includes((_a = $el.key) !== null && _a !== void 0 ? _a : '') &&
      $el.key === selected[0]) {
      setSelected$el($el);
    }
    return cloneElement($el, __assign(__assign({}, ((_b = $el.props) !== null && _b !== void 0 ? _b : {})), {
      className: ((_d = (_c = $el.props) === null || _c === void 0 ? void 0 : _c.className) !== null &&
          _d !== void 0 ? _d : '') +
        (!(withProps.excludeKeys || []).includes((_e = $el.key) !== null && _e !== void 0 ? _e : '') ?
          " ".concat(baseClassName, "__option") +
          ($el.key && selected.includes($el.key) ? ' selected' : '') :
          " ".concat(baseClassName, "__").concat($el.key)),
      key: $el.key,
      onClick: function(event) {
        var _a, _b, _c, _d, _e, _f;
        setRejectValue(true);
        (_b = (_a = $el.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b ===
          void 0 ? void 0 : _b.call(_a, event);
        if (!$el.key || ((_c = withProps.excludeKeys) === null || _c === void 0 ? void 0 : _c.includes(
            $el.key))) {
          return;
        }
        var newSelection = selected;
        if (!withProps.multiple) {
          newSelection = newSelection.includes($el.key) ? [$el.key] : [];
        }
        var index = newSelection.indexOf($el.key);
        if (index > -1) {
          newSelection.splice(index, 1);
          if (selected[0] && (selected$el === null || selected$el === void 0 ? void 0 : selected$el
            .key) && !selected.includes(selected$el === null || selected$el === void 0 ? void 0 :
              selected$el.key)) {
            var firstKey_1 = selected[0];
            var match = $options
              .find(function($el) {
                return $el.key === firstKey_1;
              });
            if (match) {
              setSelected$el(match);
            }
          }
        } else {
          newSelection.push($el.key);
          if (newSelection.length === 1) {
            setSelected$el($el);
          }
        }
        setSelected(__spreadArray([], newSelection, true));
        if (newSelection.length === 0) {
          setSelected$el(undefined);
        }
        if (inputRef.current) {
          inputRef.current.value = newSelection.join(',');
        }
        (_d = withProps.onChange) === null || _d === void 0 ? void 0 : _d.call(withProps, withProps
          .multiple ? newSelection : newSelection[0]);
        if (!withProps.multiple) {
          usePopover ? (_f = (_e = popoverRef.current) === null || _e === void 0 ? void 0 : _e
            .closePortal) === null || _f === void 0 ? void 0 : _f.call(_e) : setShowOptions(false);
        }
      }
    }));
  });
  return (_jsxs(StyledBox, __assign({
    className: getClassName((_c = withProps.boxProps) !== null && _c !== void 0 ? _c : {}, name, withProps
      .variant),
    jCss: __assign(__assign({}, jCss), ((_e = (_d = withProps.boxProps) === null || _d === void 0 ? void 0 :
      _d.jCss) !== null && _e !== void 0 ? _e : {})),
    ref: outerRef
  }, _objectWithoutProperties((_f = withProps.boxProps) !== null && _f !== void 0 ? _f : {}, [
    'className',
    'jCss',
  ]), {
    children: [_jsxs(StyledSelectInput, __assign({
        className: "".concat(baseClassName, "__input") +
          (withProps.disabled ? ' disabled' : '') +
          (withProps.invalid ? ' invalid' : ''),
        name: name,
        ref: innerRef,
        onClick: (function(event) {
          var _a, _b;
          if (withProps.disabled) {
            return;
          }
          (_a = withProps.onClick) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
          usePopover ? (_b = popoverRef.current) === null || _b === void 0 ? void 0 : _b
            .openPortal() : setShowOptions(!showOptions);
        })
      }, _objectWithoutProperties(withProps, [
        'boxProps',
        'className',
        'closeIcon',
        'color',
        'colorVariant',
        'excludeKeys',
        'inputName',
        'jCss',
        'multiple',
        'onChange',
        'onClick',
        'openIcon',
        'optionsJCss',
        'paperVariant',
        'value',
        'width',
      ]), {
        children: [_jsxs(Typography, __assign({
          className: "".concat(baseClassName, "__selection ").concat(selected.length > 1 &&
            'with-more'),
          variant: 'p'
        }, {
          children: [selected$el !== null && selected$el !== void 0 ? selected$el : (_jsx(
            "span", __assign({
              className: 'not-selected'
            }, {
              children: _jsx(LocaleProvider, __assign({
                module: (_g = withProps.intlModule) !== null && _g !== void 0 ?
                  _g : 'core'
              }, {
                children: (_h = withProps.title) !== null && _h !== void 0 ?
                  _h : (withProps.multiple ?
                    _jsx(FormattedMessage, {
                      id: 'select.many'
                    }) :
                    _jsx(FormattedMessage, {
                      id: 'select.one'
                    }))
              }))
            }))), selected.length > 1 && ", +".concat(selected.length - 1)]
        })), _jsx("input", {
          name: (_j = withProps.inputName) !== null && _j !== void 0 ? _j : name,
          ref: inputRef,
          style: {
            display: 'none'
          },
          type: 'text'
        }), _jsx(StyledIcon, __assign({
          className: " ".concat(baseClassName, "__icon")
        }, {
          children: _jsx(Icon, {
            color: (_k = withProps.color) !== null && _k !== void 0 ? _k : 'primary',
            colorVariant: (_l = withProps.colorVariant) !== null && _l !== void 0 ? _l :
              'main',
            icon: showOptions ? ((_m = withProps.closeIcon) !== null && _m !== void 0 ?
              _m : faAngleUp) : ((_o = withProps.openIcon) !== null && _o !== void 0 ?
              _o : faAngleDown)
          })
        }))]
      })), usePopover ?
      (_jsx(Popover, __assign({
        "$anchorEl": outerRef.current,
        className: optionsClassName,
        jCss: __assign(__assign({}, ((_p = jCss === null || jCss === void 0 ? void 0 : jCss["& ."
            .concat(optionsClassName)]) !== null && _p !== void 0 ? _p : {})), withProps
          .optionsJCss),
        onClose: function() {
          return setShowOptions(false);
        },
        onOpen: function() {
          return setShowOptions(true);
        },
        ref: popoverRef,
        variant: (_q = withProps.paperVariant) !== null && _q !== void 0 ? _q : 'shadowed'
      }, {
        children: $options
      }))) :
      showOptions && (_jsx(StyledSelectOptions, __assign({
        className: optionsClassName,
        jCss: __assign(__assign({}, withProps.optionsJCss), {
          top: (_s = (_r = outerRef.current) === null || _r === void 0 ? void 0 : _r
            .clientHeight) !== null && _s !== void 0 ? _s : 0,
          left: 0
        }),
        ref: optionsRef,
        variant: (_t = withProps.paperVariant) !== null && _t !== void 0 ? _t : 'shadowed'
      }, {
        children: $options
      })))
    ]
  })));
});
Select.displayName = DISPLAY_NAME;
export default Select;
