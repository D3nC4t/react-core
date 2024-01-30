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
import {
  jsx as _jsx
} from "react/jsx-runtime";
import React from 'react';
import {
  merge
} from 'lodash';
import {
  CacheProvider,
  ThemeProvider
} from '@emotion/react';
import createCache from '@emotion/cache';
import createTheme from './styled/createTheme';
var theme = createTheme();
export default theme;
export {
  default as createTheme
}
from './styled/createTheme';
export {
  default as useDefaultProps
}
from './hooks/useDefaultProps';
export {
  default as useTheme
}
from './hooks/useTheme';
export {
  default as useVariantJCss
}
from './hooks/useVariantJCss';
export function ThemeCustomization(_a) {
  var $el = _a.$el,
    children = _a.children,
    _b = _a.theme,
    otherTheme = _b === void 0 ? {} : _b;
  var cache = createCache(__assign({
    key: 'css',
    prepend: true
  }, ($el && {
    container: $el
  })));
  return (_jsx(React.StrictMode, {
    children: _jsx(CacheProvider, __assign({
      value: cache
    }, {
      children: _jsx(ThemeProvider, __assign({
        theme: merge({}, theme, otherTheme)
      }, {
        children: children
      }))
    }))
  }));
}
export var appTheme = theme;
export function applyTheme(theme) {
  // TODO: check if is a valid theme
  appTheme = theme;
  return theme;
}
