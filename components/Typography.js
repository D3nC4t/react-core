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
import { forwardRef, useState, useEffect } from 'react';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, { getClassName } from '../theme/styled';
import { useDefaultProps, useTheme } from '../theme';
export var Typography = forwardRef(function (_a, ref) {
    var children = _a.children, fontFamily = _a.fontFamily, _b = _a.name, name = _b === void 0 ? 'C4tTypography' : _b, tag = _a.tag, inputProps = __rest(_a, ["children", "fontFamily", "name", "tag"]);
    var withProps = useDefaultProps(inputProps, name);
    var theme = useTheme();
    var _c = useState(), $el = _c[0], set$el = _c[1];
    var _d = useState(), themeVariant = _d[0], setThemeVariant = _d[1];
    var _e = useState(), htmlTag = _e[0], setHtmlTag = _e[1];
    useEffect(function () {
        setThemeVariant(theme.typography.variants[withProps.variant]);
    }, [withProps.variant]);
    useEffect(function () {
        var _a;
        setHtmlTag((_a = tag !== null && tag !== void 0 ? tag : themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.defaultTag) !== null && _a !== void 0 ? _a : 'p');
    }, [tag, themeVariant]);
    useEffect(function () {
        if (!htmlTag) {
            return;
        }
        var StyledTypography = styled(htmlTag, {
            dontForwardProp: [
                'tag',
                'variant',
            ],
        })(function (_a) {
            var _b;
            var theme = _a.theme;
            return (__assign(__assign({ margin: 0, fontFamily: fontFamily !== null && fontFamily !== void 0 ? fontFamily : theme.typography.fontFamily }, (withProps.color && {
                color: theme.get.color(withProps.color, (_b = withProps.colorVariant) !== null && _b !== void 0 ? _b : 'main'),
            })), themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.defaultStyles));
        });
        set$el(StyledTypography);
    }, [fontFamily, htmlTag, themeVariant, withProps.color, withProps.colorVariant]);
    return ($el ? _jsx($el, __assign({ className: getClassName(withProps, name, withProps.variant), name: name, ref: ref }, _objectWithoutProperties(withProps, [
        'className',
    ]), { children: children })) : _jsx(_Fragment, {}));
});
Typography.displayName = 'C4tTypography';
export default Typography;
