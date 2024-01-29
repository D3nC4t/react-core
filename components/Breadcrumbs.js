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
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, forwardRef, useEffect, useState, } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Box from './Box';
import Icon from './Icon';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import { getClassName } from '../theme/styled';
import { useDefaultProps, useVariantJCss } from '../theme';
export var Breadcrumbs = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? 'C4tBreadcrumbs' : _b, inputProps = __rest(_a, ["children", "name"]);
    var _c = useState([]), $crumbs = _c[0], set$crumbs = _c[1];
    var withProps = useDefaultProps(inputProps, name);
    var jCss = useVariantJCss(withProps, name, withProps.variant);
    useEffect(function () {
        var _a;
        var index = 0;
        function cloneLink(element) {
            var _a, _b, _c, _d, _e;
            return cloneElement(element, __assign({ className: getClassName((_a = element.props) !== null && _a !== void 0 ? _a : {}, name, withProps.variant, 'link')
                    + (index === withProps.active ? ' active' : '') }, (index++ === withProps.active && {
                color: (_c = (_b = element.props) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : withProps.color,
                colorVariant: (_e = (_d = element.props) === null || _d === void 0 ? void 0 : _d.colorVariant) !== null && _e !== void 0 ? _e : withProps.colorVariant,
            })));
        }
        var _b = children
            .map(function (child) { return cloneLink(child); }), $firstCrumb = _b[0], others = _b.slice(1);
        var delimiter = (_jsx(Icon, { className: getClassName(withProps, name, withProps.variant, 'delimiter'), color: withProps.color, colorVariant: withProps.colorVariant, icon: (_a = withProps.icon) !== null && _a !== void 0 ? _a : faChevronRight }));
        set$crumbs(others.reduce(function (acc, curr) { return acc.concat(delimiter, curr); }, [$firstCrumb]));
    }, [children, name, withProps]);
    return (_jsx(Box, __assign({ className: getClassName(withProps, name, withProps.variant), jCss: jCss, ref: ref, variant: 'flex-row' }, _objectWithoutProperties(withProps, [
        'active',
        'className',
        'icon',
        'jCss',
        'variant',
    ]), { children: $crumbs })));
});
Breadcrumbs.displayName = 'C4tBreadcrumbs';
export default Breadcrumbs;
