import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Backdrop from '../../components/Backdrop';
Backdrop.displayName = 'Backdrop';
var meta = {
    title: 'Core/Components/Backdrop',
    component: Backdrop,
    tags: ['backdrop'],
    argTypes: {
        variant: {
            options: ['root', 'flex-column', 'flex-row'],
            control: { type: 'select' },
        },
    },
};
export default meta;
var children = _jsxs(_Fragment, { children: [_jsx("span", { children: "test 1" }), _jsx("span", { children: "test 2" })] });
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
