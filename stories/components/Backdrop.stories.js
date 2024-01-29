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
import { FormattedMessage } from 'react-intl';
import Backdrop from '../../components/Backdrop';
import LocaleProvider from '../../translations/component';
import { BackdropControls } from '../controls';
Backdrop.displayName = 'Backdrop';
var meta = {
    title: 'Core/Components/Backdrop',
    component: Backdrop,
    tags: ['backdrop'],
    argTypes: BackdropControls,
};
export default meta;
var children = _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsx("span", { children: _jsx(FormattedMessage, { id: 'backdrop.label', values: { number: 1 } }) }), _jsx("span", { children: _jsx(FormattedMessage, { id: 'backdrop.label', values: { number: 2 } }) })] }));
export var Default = {
    args: {
        children: children,
    },
};
export var Root = {
    args: {
        children: children,
        variant: 'root',
    },
};
export var AutoFit = {
    args: {
        children: children,
        variant: 'auto-fit',
    },
};
export var FlexColumn = {
    args: {
        children: children,
        variant: 'flex-column',
    },
};
export var FlexRow = {
    args: {
        children: children,
        variant: 'flex-row',
    },
};
