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
import { forwardRef, useImperativeHandle, useRef, useState, useEffect, } from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, { getClassName } from '../theme/styled';
import { useDefaultProps, useTheme, useVariantJCss } from '../theme';
import { useDebouncedCallback } from '../hooks';
var StyledBox = styled(Box)({});
var StyledTextArea = styled('textarea', {
    dontForwardProp: ['resize', 'width'],
})({});
export var TextArea = forwardRef(function (_a, ref) {
    var _b, _c, _d, _e, _f;
    var _g = _a.boxProps, boxProps = _g === void 0 ? {} : _g, _h = _a.name, name = _h === void 0 ? 'C4tTextArea' : _h, inputProps = __rest(_a, ["boxProps", "name"]);
    var theme = useTheme();
    var _j = useState(false), focused = _j[0], setFocused = _j[1];
    var _k = useState(''), value = _k[0], setValue = _k[1];
    var withProps = useDefaultProps(inputProps, name);
    var innerRef = useRef(null);
    var debouncedOnChange = useDebouncedCallback(function (event) {
        var _a;
        (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
    }, [withProps.onChange], 300);
    var jCss = useVariantJCss(withProps, name, withProps.variant);
    useImperativeHandle(ref, function () { return innerRef.current; }, []);
    useEffect(function () {
        var _a;
        setValue((_a = withProps.value) !== null && _a !== void 0 ? _a : '');
    }, [withProps.value]);
    return (_jsxs(StyledBox, __assign({ className: getClassName((_b = withProps.boxProps) !== null && _b !== void 0 ? _b : {}, name, 'box')
            + (focused ? " focused" : '')
            + (withProps.disabled ? " disabled" : '')
            + (withProps.invalid ? " invalid" : '') }, boxProps, { ref: innerRef }, { children: [_jsx(StyledTextArea, __assign({ className: getClassName(withProps, name, withProps.variant), jCss: __assign({ resize: (_c = withProps.resize) !== null && _c !== void 0 ? _c : 'vertical', width: (_d = withProps.width) !== null && _d !== void 0 ? _d : theme.get.rem(128, 'px') }, jCss), name: name, onChange: function (event) {
                    setValue(event.target.value);
                    debouncedOnChange(event);
                }, onFocus: function (event) {
                    var _a;
                    setFocused(true);
                    (_a = withProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
                }, onBlur: function (event) {
                    var _a;
                    setFocused(false);
                    (_a = withProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(withProps, event);
                }, rows: (_e = withProps.rows) !== null && _e !== void 0 ? _e : 3, defaultValue: value }, _objectWithoutProperties(withProps, [
                'boxProps',
                'className',
                'inputName',
                'invalid',
                'jCss',
                'onChange',
                'onFocus',
                'onBlur',
                'value',
            ]))), _jsx("textarea", { name: (_f = withProps.inputName) !== null && _f !== void 0 ? _f : name, style: { display: 'none' }, defaultValue: value })] })));
});
TextArea.displayName = 'C4tTextArea';
export default TextArea;
