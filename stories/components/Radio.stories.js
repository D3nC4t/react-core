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
import Box from '../../components/Box';
import Radio from '../../components/Radio';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Radio.displayName = 'Radio';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'color' },
        },
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
                'root',
                'contained', 'contained-checkmark', 'contained-cross',
                'outlined', 'outlined-checkmark', 'outlined-cross',
            ],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {},
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: [_jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Radio, __assign({ color: color }, props)), text] })), _jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Radio, __assign({ color: color, disabled: true }, props)), "Disabled"] })), _jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Radio, __assign({ color: color, invalid: true }, props)), "Invalid"] }))] }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var ContainedCheckmark = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'contained-checkmark',
    },
    render: renderThemeColorsAndMutations,
};
export var ContainedCross = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'contained-cross',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var OutlinedCheckmark = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'outlined-checkmark',
    },
    render: renderThemeColorsAndMutations,
};
export var OutlinedCross = {
    args: {
        onChange: function (e, state) { return console.log(state); },
        variant: 'outlined-cross',
    },
    render: renderThemeColorsAndMutations,
};
