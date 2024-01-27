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
import { useDebugValue, useEffect, useState } from 'react';
import { merge } from 'lodash';
import createTheme from '../styled/createTheme';
import getAndProcessVariantStyles from '../styled/createStyled/getAndProcessVariantStyles';
import objectCode from '../../utils/objectCode';
import { useTheme } from '../../theme';
var defaultTheme = createTheme();
export default function useVariantJCss(props, name, variant, extraJCss) {
    if (props === void 0) { props = {}; }
    if (variant === void 0) { variant = 'root'; }
    if (extraJCss === void 0) { extraJCss = {}; }
    var theme = useTheme(defaultTheme);
    var _a = useState({}), jCss = _a[0], setJCss = _a[1];
    useEffect(function () {
        setJCss(merge(getAndProcessVariantStyles(__assign(__assign({}, props), { name: name, theme: theme, variant: variant })), extraJCss, props.jCss));
    }, [objectCode(props), props.jCss, props.name, props.variant, theme]);
    if (process.env.NODE_ENV !== 'production') {
        useDebugValue(jCss);
    }
    return jCss;
}
