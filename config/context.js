var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createContext } from 'react';
import config, { setConfig } from './default';
export var initialConfigContext = __assign(__assign({}, config), { setLocale: function (locale) { return setConfig('locale', locale); } });
var ConfigContext = createContext(initialConfigContext);
export default ConfigContext;
