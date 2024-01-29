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
import { forwardRef, } from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import { getClassName } from '../theme/styled';
import { useDefaultProps, useVariantJCss } from '../theme';
export var TableCell = forwardRef(function (_a, ref) {
    var _b, _c;
    var children = _a.children, _d = _a.name, name = _d === void 0 ? 'C4tTableCell' : _d, inputProps = __rest(_a, ["children", "name"]);
    var withProps = useDefaultProps(inputProps, name);
    var jCss = useVariantJCss(withProps, name, withProps.variant);
    return (_jsx(Box, __assign({ className: getClassName(withProps, name, withProps.variant)
            + ' ' + getClassName({}, name, 'box'), jCss: jCss, ref: ref, tag: (_b = withProps.tag) !== null && _b !== void 0 ? _b : 'td', variant: (_c = withProps.boxVariant) !== null && _c !== void 0 ? _c : 'no-padding' }, _objectWithoutProperties(withProps, [
        'boxVariant',
        'className',
        'jCss',
        'tag',
        'variant',
    ]), { children: children })));
});
TableCell.displayName = 'C4tTableCell';
export default TableCell;
