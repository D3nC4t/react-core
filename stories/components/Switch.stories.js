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
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '../../components/Box';
import Switch from '../../components/Switch';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Switch.displayName = 'Switch';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: Object.keys(appTheme.color),
            control: { type: 'select' },
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
            options: Object.keys((_a = appTheme.components.C4tSwitch.variants) !== null && _a !== void 0 ? _a : {}),
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
            }, variant: 'flex-column' }, { children: [_jsx(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: text })), _jsx(Switch, __assign({}, props, { color: color, value: false })), _jsx(Switch, __assign({}, props, { color: color, value: true }))] }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Rounded = {
    args: {
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
