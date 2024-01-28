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
import { faHome, faClose } from '@fortawesome/free-solid-svg-icons';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Icon from '../../components/Icon';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Input.displayName = 'Input';
var meta = {
    title: 'Core/Components/Input',
    component: Input,
    tags: ['inputs'],
    argTypes: {
        variant: {
            options: [
                'contained',
                'dashed',
                'dotted',
                'outlined',
                'root',
                'round-contained',
                'round-outlined',
                'rounded',
                'shadowed',
            ],
            control: { type: 'select' },
        }
    },
};
export default meta;
var renderThemeColorsAndMutations = function (props) {
    var $startAdornment = (_jsx(Box, __assign({ jCss: {
            cursor: 'pointer',
            padding: appTheme.spacing.xs,
            '.invalid & *': {
                color: "".concat(appTheme.color.error.main, " !important"),
            },
        } }, { children: _jsx(Icon, { icon: faHome }) })));
    var $endAdornment = (_jsx(Box, __assign({ jCss: {
            cursor: 'pointer',
            padding: appTheme.spacing.xs,
            '.invalid & *': {
                color: "".concat(appTheme.color.error.main, " !important"),
            },
        } }, { children: _jsx(Icon, { icon: faClose }) })));
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
            }, variant: 'flex-column' }, { children: [_jsx(Input, __assign({ color: color, value: text }, props)), _jsx(Input, __assign({ color: color, startAdornment: $startAdornment, value: "Start Adornment" }, props)), _jsx(Input, __assign({ color: color, endAdornment: $endAdornment, value: "End Adornment" }, props)), _jsx(Input, __assign({ color: color, endAdornment: $endAdornment, startAdornment: $startAdornment, value: "Both Adornment" }, props)), _jsx(Input, __assign({ color: color, disabled: true, startAdornment: $startAdornment, value: "Disabled" }, props)), _jsx(Input, __assign({ color: color, invalid: true, startAdornment: $startAdornment, value: "Invalid" }, props))] })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Default = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
    },
};
export var Root = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Dashed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var Rounded = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var Shadowed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'shadowed',
    },
    render: renderThemeColorsAndMutations,
};
