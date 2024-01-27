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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Popover from '../../components/Popover';
Popover.displayName = 'Popover';
var meta = {
    title: 'Core/Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    argTypes: {
        $bgColor: {
            control: { type: 'color' },
        },
        $bColor: {
            control: { type: 'color' },
        },
        $bRadius: {
            control: { type: 'text' },
        },
        variant: {
            options: ['bordered', 'root', 'round-bordered', 'round-shadowed', 'rounded', 'shadowed'],
            control: { type: 'select' },
        },
    },
};
export default meta;
var AnchoredPopover = function (props) {
    var _a, _b;
    var $popover = useRef(null);
    var _c = useState(), $button = _c[0], set$button = _c[1];
    return (_jsxs(Box, { children: [_jsxs(Button, __assign({ onClick: function () {
                    var _a;
                    (_a = $popover.current) === null || _a === void 0 ? void 0 : _a.openPortal();
                }, ref: function ($el) { return set$button($el); }, variant: 'contained' }, { children: ["Open ", (_a = props.variant) === null || _a === void 0 ? void 0 : _a.toUpperCase(), " Popover"] })), _jsxs(Popover, __assign({ ref: $popover, "$anchorEl": $button }, props, { children: ["Test ", (_b = props.variant) === null || _b === void 0 ? void 0 : _b.toUpperCase(), " Popover"] }))] }));
};
export var Default = {
    args: {},
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var Bordered = {
    args: {
        variant: 'bordered',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var RoundBordered = {
    args: {
        variant: 'round-bordered',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var RoundShadowed = {
    args: {
        variant: 'round-shadowed',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var Rounded = {
    args: {
        variant: 'rounded',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
export var Shadowed = {
    args: {
        variant: 'shadowed',
    },
    render: function (props) { return (_jsx(AnchoredPopover, __assign({}, props))); },
};
