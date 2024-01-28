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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useEffect, useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import { getClassName } from '../theme/styled';
import { useDefaultProps, useTheme } from '../theme';
export var Icon = forwardRef(function (_a, ref) {
    var _b = _a.name, name = _b === void 0 ? 'C4tIcon' : _b, inputProps = __rest(_a, ["name"]);
    var theme = useTheme();
    var withProps = useDefaultProps(inputProps, name);
    var _c = useState(), color = _c[0], setColor = _c[1];
    useEffect(function () {
        var _a;
        if (!withProps.color) {
            setColor(undefined);
            return;
        }
        var useColor = withProps.color;
        var variant = (_a = withProps.colorVariant) !== null && _a !== void 0 ? _a : 'main';
        if (theme.color[useColor] && theme.color[useColor][variant]) {
            useColor = theme.color[useColor][variant];
        }
        setColor(useColor);
    }, [withProps.color, withProps.colorVariant]);
    return (withProps.icon
        ? _jsx(FontAwesomeIcon, __assign({ className: getClassName(withProps, name), color: color, icon: withProps.icon, name: name, ref: ref }, _objectWithoutProperties(withProps, [
            'className',
            'color',
            'colorVariant',
            'icon',
        ])))
        : _jsx(_Fragment, {}));
});
Icon.displayName = 'C4tIcon';
export default Icon;
