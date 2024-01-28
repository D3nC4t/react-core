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
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '../../components/Box';
import Tooltip from '../../components/Tooltip';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Tooltip.displayName = 'Tooltip';
var meta = {
    title: 'Core/Components/Tooltip',
    component: Tooltip,
    tags: ['tooltip'],
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
            options: Object.keys((_a = appTheme.components.C4tTooltip.variants) !== null && _a !== void 0 ? _a : {}),
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        tooltip: 'Default Tooltip',
        children: _jsx(Box, __assign({ variant: 'auto-fit-no-padding' }, { children: "Hover me" })),
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsx(Tooltip, __assign({ color: color }, props, { children: text }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        tooltip: 'Default Tooltip',
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        tooltip: 'Default Tooltip',
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Dashed = {
    args: {
        tooltip: 'Default Tooltip',
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        tooltip: 'Default Tooltip',
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        tooltip: 'Default Tooltip',
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
