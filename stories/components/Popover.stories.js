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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import Popover from '../../components/Popover';
import { PopoverControls } from '../controls';
Box.displayName = 'Box';
Button.displayName = 'Button';
Popover.displayName = 'Popover';
var meta = {
    title: 'Core/Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    argTypes: PopoverControls,
};
export default meta;
var AnchoredPopover = function (props) {
    var $popover = useRef(null);
    var _a = useState(), $button = _a[0], set$button = _a[1];
    return (_jsx(Box, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsxs(Button, __assign({ onClick: function () {
                        var _a;
                        (_a = $popover.current) === null || _a === void 0 ? void 0 : _a.openPortal();
                    }, ref: function ($el) { return set$button($el); }, variant: 'contained' }, { children: [_jsx(FormattedMessage, { id: 'open' }), props.variant && (_jsx(_Fragment, { children: _jsx(FormattedMessage, { id: 'variant', values: { name: props.variant } }) })), "\u00A0Popover"] })), _jsx(Popover, __assign({ ref: $popover, "$anchorEl": $button }, props, { children: _jsx(FormattedMessage, { id: 'some-text' }) }))] })) }));
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
