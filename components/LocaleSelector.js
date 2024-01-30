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
  useEffect,
  useState,
} from 'react';
import Select from './Select';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useConfig
} from '../config';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  I18n
} from '../config';
export var LocaleSelector = forwardRef(function(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? 'C4tLocaleSelector' : _b,
    inputProps = __rest(_a, ["name"]);
  var enabledLocales = useConfig().enabledLocales;
  var _c = useState([]),
    options = _c[0],
    setOptions = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useEffect(function() {
    var _a;
    var options = [];
    if (!enabledLocales) {
      return;
    }
    var localesList = enabledLocales === -1 ? Object.keys(I18n) : enabledLocales;
    for (var _i = 0, localesList_1 = localesList; _i < localesList_1.length; _i++) {
      var locale = localesList_1[_i];
      var localesList_2 = I18n;
      var localeInfo = (_a = localesList_2[locale]) !== null && _a !== void 0 ? _a : undefined;
      if (localeInfo) {
        options.push({
          children: localeInfo.language + (localeInfo.location ? " - ".concat(localeInfo.location) : ''),
          key: locale,
        });
      }
    }
    setOptions(options);
  }, [enabledLocales]);
  return (_jsx(Select, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: options.map(function(option) {
      return (_jsx("span", {
        children: option.children
      }, option.key));
    })
  })));
});
LocaleSelector.displayName = 'C4tLocaleSelector';
export default LocaleSelector;
