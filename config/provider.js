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
import useLocalStorage from '../hooks/useLocalStorage';
import ConfigContext, {
  initialConfigContext
} from './context';
import initialConfigs, {
  CONFIG_KEY
} from './default';
var ConfigProvider = function(_a) {
  var children = _a.children;
  var config = useLocalStorage(CONFIG_KEY, initialConfigs)[0];
  return (_jsx(ConfigContext.Provider, __assign({
    value: __assign(__assign({}, (config !== null && config !== void 0 ? config : initialConfigs)), {
      setLocale: initialConfigContext.setLocale
    })
  }, {
    children: children
  })));
};
export default ConfigProvider;
