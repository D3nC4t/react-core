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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Portal from '../../components/Portal';
Box.displayName = 'Box';
Button.displayName = 'Button';
Portal.displayName = 'Portal';
var meta = {
    title: 'Core/Components/Portal',
    component: Portal,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'bottom', 'bottom-left', 'bottom-right',
                'center', 'left', 'right',
                'root',
                'top', 'top-left', 'top-right',
            ],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: _jsx("span", { children: "Test" }),
    },
};
var WrappedPortal = function (props) {
    var _a, _b;
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    return (_jsxs(Box, { children: [_jsxs(Button, __assign({ variant: 'contained', onClick: function () {
                    setOpen(true);
                } }, { children: ["Open ", (_a = props.variant) === null || _a === void 0 ? void 0 : _a.toUpperCase()] })), _jsx(Portal, __assign({ open: open, onClose: function () {
                    setOpen(false);
                } }, props, { children: _jsx("span", { children: (_b = props.variant) === null || _b === void 0 ? void 0 : _b.toUpperCase() }) }))] }));
};
export var Bottom = {
    args: {
        variant: 'bottom',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var BottomRight = {
    args: {
        variant: 'bottom-right',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var BottomLeft = {
    args: {
        variant: 'bottom-left',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var Center = {
    args: {
        variant: 'center',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var CenterRight = {
    args: {
        variant: 'right',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var CenterLeft = {
    args: {
        variant: 'left',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var Top = {
    args: {
        variant: 'top',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var TopRight = {
    args: {
        variant: 'top-right',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
export var TopLeft = {
    args: {
        variant: 'top-left',
    },
    render: function (props) { return _jsx(WrappedPortal, __assign({}, props)); },
};
