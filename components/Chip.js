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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useRef, useState, useLayoutEffect, } from 'react';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Avatar from './Avatar';
import Icon from './Icon';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, { getClassName } from '../theme/styled';
import { useDefaultProps, useVariantJCss } from '../theme';
import validateChildComponent from '../utils/validateChildComponent';
export var Chip = forwardRef(function (_a, ref) {
    var _b = _a.name, name = _b === void 0 ? 'C4tChip' : _b, inputProps = __rest(_a, ["name"]);
    var _c = useState(null), $el = _c[0], set$el = _c[1];
    var withProps = useDefaultProps(inputProps, name);
    var innerRef = useRef(null);
    var jCss = useVariantJCss(withProps, name, withProps.variant);
    useImperativeHandle(ref, function () { return innerRef.current; }, []);
    useLayoutEffect(function () {
        var _a, _b, _c;
        var $prepend = null;
        var removeIcon = (_a = withProps.removeIcon) !== null && _a !== void 0 ? _a : faCircleXmark;
        var tag = withProps.component || 'div';
        var StyledTag = styled(tag)({});
        if (withProps.prepend) {
            if (validateChildComponent('Chip', withProps.prepend, 'Avatar', Avatar, true)
                || validateChildComponent('Chip', withProps.prepend, 'Icon', Icon, true)) {
                $prepend = withProps.prepend;
            }
            else if (process.env.NODE_ENV !== 'production') {
                throw new Error("C4t: \"Chip\" only accepts \"Avatar\" or \"Icon\" on \"prepend\" prop");
            }
        }
        var $removeIcon = withProps.onRemove ? (_jsx(Icon, { className: getClassName(withProps, name, withProps.variant, 'remove-icon'), color: (_b = withProps.removeColor) !== null && _b !== void 0 ? _b : 'primary', colorVariant: (_c = withProps.removeColorVariant) !== null && _c !== void 0 ? _c : 'dark', icon: removeIcon, onClick: function (event) { var _a; return (_a = withProps.onRemove) === null || _a === void 0 ? void 0 : _a.call(withProps, event); } })) : _jsx(_Fragment, {});
        set$el(_jsxs(StyledTag, __assign({ className: getClassName(withProps, name, withProps.variant), jCss: jCss, name: name }, _objectWithoutProperties(withProps, [
            'className',
            'component',
            'jCss',
            'label',
            'onRemove',
            'prepend',
            'removeColor',
            'removeIcon',
        ]), { children: [$prepend, _jsx(Typography, __assign({ className: getClassName(withProps, name, withProps.variant, 'label'), variant: 'p' }, { children: withProps.label })), $removeIcon] })));
    }, [withProps, jCss]);
    return $el !== null && $el !== void 0 ? $el : _jsx(_Fragment, {}); // TODO: loading indicator
});
Chip.displayName = 'C4tChip';
export default Chip;
