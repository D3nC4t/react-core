import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '../../components/Box';
Box.displayName = 'Box';
var meta = {
    title: 'Core/Components/Box',
    component: Box,
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
            options: [
                'root', 'auto-fit', 'auto-fit-no-padding', 'bordered', 'centered',
                'flex-column', 'flex-row', 'invisible', 'no-padding',
            ],
            control: { type: 'select' },
        }
    },
};
export default meta;
export var Root = {
    args: {
        children: 'Root Box',
    },
};
export var AutoFit = {
    args: {
        children: 'Auto fit Box',
        variant: 'auto-fit',
    },
};
export var AutoFitNoPadding = {
    args: {
        children: 'Auto fit no padding Box',
        variant: 'auto-fit-no-padding',
    },
};
export var Centered = {
    args: {
        children: 'Centered Box',
        variant: 'centered',
    },
};
export var FlexColumn = {
    args: {
        children: _jsxs(_Fragment, { children: [_jsx("span", { children: "Flex Box" }), _jsx("span", { children: "Column" })] }),
        variant: 'flex-column',
    },
};
export var FlexRow = {
    args: {
        children: _jsxs(_Fragment, { children: [_jsx("span", { children: "Flex Box" }), _jsx("span", { children: "Row" })] }),
        variant: 'flex-row',
    },
};
export var Bordered = {
    args: {
        children: 'Bordered Box',
        variant: 'bordered',
    },
};
export var NoPadding = {
    args: {
        children: 'No padding Box',
        variant: 'no-padding',
    },
};
