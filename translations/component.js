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
  jsx as _jsx,
  Fragment as _Fragment
} from "react/jsx-runtime";
import {
  useEffect,
  useState
} from 'react';
import {
  IntlProvider
} from 'react-intl';
import {
  loadI18nModuleData,
  watchModuleTranslations
} from './index';
import {
  useConfig
} from '../config';
var LocaleProvider = function(_a) {
  var children = _a.children,
    module = _a.module,
    forceLocale = _a.forceLocale;
  var locale = useConfig().locale;
  var _b = useState(),
    messages = _b[0],
    setMessages = _b[1];
  var useLocale = forceLocale !== null && forceLocale !== void 0 ? forceLocale : locale;
  useEffect(function() {
    loadI18nModuleData(useLocale, module)
      .then(function(messages) {
        return setMessages(messages !== null && messages !== void 0 ? messages : {});
      });
  }, [useLocale, module]);
  useEffect(function() {
    if (!module) {
      return;
    }
    return watchModuleTranslations(module, useLocale, setMessages);
  }, [module, useLocale]);
  return (_jsx(_Fragment, {
    children: messages && (_jsx(IntlProvider, __assign({
      locale: useLocale,
      messages: messages
    }, {
      children: children
    })))
  }));
};
export default LocaleProvider;
