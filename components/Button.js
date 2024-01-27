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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, } from 'react';
import Icon from './Icon';
import Typography from './Typography';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, { getClassName } from '../theme/styled';
import { useDefaultProps } from '../theme';
var StyledButton = styled('button', {
    dontForwardProp: ['typographyProps'],
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (__assign(__assign(__assign(__assign({ cursor: props.disabled ? 'default' : 'pointer' }, (props.size === 'small' && {
        padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit, " ").concat(theme.spacing.xs).concat(theme.shape.unit),
    })), (props.size === 'medium' && {
        padding: "".concat(theme.spacing.xs).concat(theme.shape.unit, " ").concat(theme.spacing.s).concat(theme.shape.unit),
    })), (props.size === 'large' && {
        padding: "".concat(theme.spacing.s).concat(theme.shape.unit, " ").concat(theme.spacing.ml).concat(theme.shape.unit),
    })), (props.variant === 'icon' && __assign(__assign(__assign({}, (props.size === 'small' && {
        padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit),
    })), (props.size === 'medium' && {
        padding: "".concat(theme.spacing.xs).concat(theme.shape.unit),
    })), (props.size === 'large' && {
        padding: "".concat(theme.spacing.s).concat(theme.shape.unit),
    })))));
});
export var Button = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? 'C4tButton' : _b, props = __rest(_a, ["children", "name"]);
    var withProps = useDefaultProps(props, name);
    return (_jsxs(StyledButton, __assign({ className: getClassName(withProps, name, withProps.variant), name: name, ref: ref }, _objectWithoutProperties(withProps, [
        'className',
        'endIcon',
        'endIconProps',
        'startIcon',
        'startIconProps',
        'typographyProps',
    ]), { children: [withProps.startIcon && _jsx(Icon, __assign({}, withProps.startIconProps, { className: 'start-icon', icon: withProps.startIcon })), _jsx(Typography, __assign({}, withProps.typographyProps, { children: children })), withProps.endIcon && _jsx(Icon, __assign({}, withProps.endIconProps, { className: 'end-icon', icon: withProps.endIcon }))] })));
});
Button.displayName = 'C4tButton';
export default Button;
