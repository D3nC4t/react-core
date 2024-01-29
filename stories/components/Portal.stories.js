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
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import Portal from '../../components/Portal';
import { PortalControls } from '../controls';
Box.displayName = 'Box';
Button.displayName = 'Button';
Portal.displayName = 'Portal';
var meta = {
    title: 'Core/Components/Portal',
    component: Portal,
    tags: ['autodocs'],
    argTypes: PortalControls,
};
export default meta;
export var Default = {
    args: {
        children: (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'some-text' }) }))),
    },
};
var WrappedPortal = function (props) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    return (_jsx(Box, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsxs(Button, __assign({ variant: 'contained', onClick: function () {
                        setOpen(true);
                    } }, { children: [_jsx(FormattedMessage, { id: 'open' }), props.variant && (_jsx(_Fragment, { children: _jsx(FormattedMessage, { id: 'variant', values: { name: props.variant } }) }))] })), _jsx(Portal, __assign({ open: open, onClose: function () {
                        setOpen(false);
                    } }, props, { children: _jsx(FormattedMessage, { id: 'some-text' }) }))] })) }));
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
