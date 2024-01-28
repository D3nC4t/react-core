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
import Icon from '../../components/Icon';
import Select from '../../components/Select';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { appTheme } from '../../theme';
import Typography from '../../components/Typography';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Select.displayName = 'Select';
var meta = {
    title: 'Core/Components/Select',
    component: Select,
    tags: ['select'],
    argTypes: {
        paperVariant: {
            options: ['bordered', 'root', 'round-bordered', 'round-shadowed', 'rounded', 'shadowed'],
            control: { type: 'select' },
        },
        variant: {
            options: [
                'contained', 'round-contained',
                'dashed',
                'dotted',
                'outlined', 'round-outlined',
                'root',
                'rounded',
                'shadowed',
            ],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: [
            _jsxs("span", { children: [_jsx(Icon, { icon: faHome, style: { paddingRight: '0.25rem' } }), "test1 - test1 - test1"] }, 'test1'),
            _jsx("span", { children: "test2 - test2 - test2" }, 'test2'),
            _jsx("span", { children: "test3 - test3 - test3" }, 'test3'),
        ],
        onChange: function (selected) { return console.log(selected); },
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    !props.children && (props.children = [
        _jsx("span", { children: "Test 1" }, 'test1'),
        _jsx("span", { children: "Test 2" }, 'test2'),
        _jsx("span", { children: "Test 3" }, 'test3'),
    ]);
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
            }, variant: 'flex-column' }, { children: [text, _jsxs(Typography, __assign({ variant: 'p' }, { children: ["Single select", _jsx(Select, __assign({ color: color, value: 'test1' }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: ["Multi select", _jsx(Select, __assign({ color: color, multiple: true, value: ['test1', 'test3'] }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: ["Disabled", _jsx(Select, __assign({ color: color, disabled: true, value: 'test1' }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: ["Invalid", _jsx(Select, __assign({ color: color, invalid: true, value: 'test1' }, props))] }))] })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Dashed = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var OutlinedSandwich = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'outlined-sandwich',
    },
    render: renderThemeColorsAndMutations,
};
export var Rounded = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'round-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var Sandwich = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'sandwich',
    },
    render: renderThemeColorsAndMutations,
};
export var Shadowed = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'shadowed',
    },
    render: renderThemeColorsAndMutations,
};
