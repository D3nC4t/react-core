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
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Input from './Input';
import Select from './Select';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  extractTextFromElement
} from '../utils';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  useTranslations
} from '../translations';
var DISPLAY_NAME = 'C4tAutocomplete';
export var Autocomplete = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var _d = useTranslations('core'),
    intl = _d[0],
    hasLoadedIntl = _d[1];
  var _e = useState(''),
    search = _e[0],
    setSearch = _e[1];
  var withProps = useDefaultProps(__assign({
    selectName: 'C4tSelect'
  }, inputProps), name);
  var selectRef = useRef(null);
  var searchRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    if (selectRef.current && searchRef.current) {
      selectRef.current.searchRef = searchRef.current;
    }
    return selectRef.current;
  }, [
    searchRef, searchRef.current,
    selectRef, selectRef.current,
  ]);
  var $options = __spreadArray([
      _jsx(Input, {
        color: withProps.color,
        inputName: 'search-options',
        onChange: function(event) {
          return setSearch(event.target.value);
        },
        placeholder: (_b = withProps.searchPlaceholder) !== null && _b !== void 0 ? _b : (hasLoadedIntl ? intl
          .formatMessage({
            id: 'search'
          }) : ''),
        ref: searchRef
      }, 'search')
    ], children
    .filter(function(child) {
      return search === '' ||
        (child.key && child.key.startsWith(search)) ||
        extractTextFromElement(child).startsWith(search);
    }), true);
  return (_jsx(Select, __assign({
    className: getClassName(withProps, name, withProps.variant),
    excludeKeys: ['search'],
    jCss: jCss,
    ref: selectRef,
    name: withProps.selectName
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'selectName',
  ]), {
    children: $options
  })));
});
Autocomplete.displayName = DISPLAY_NAME;
export default Autocomplete;
