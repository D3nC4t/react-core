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
import { jsx as _jsx } from "react/jsx-runtime";
import { ConfigProvider } from './config';
import { ThemeCustomization } from './theme';
export * from './components';
export * from './hooks';
export * from './theme';
export * from './utils';
var C4tSystem = function (_a) {
    var $el = _a.$el, children = _a.children, _b = _a.theme, theme = _b === void 0 ? {} : _b;
    return (_jsx(ConfigProvider, { children: _jsx(ThemeCustomization, __assign({ "$el": $el, theme: theme }, { children: children })) }));
};
export default C4tSystem;
