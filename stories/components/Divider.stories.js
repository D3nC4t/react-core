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
import Divider from '../../components/Divider';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Divider.displayName = 'Divider';
var meta = {
    title: 'Core/Components/Divider',
    component: Divider,
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
            options: Object.keys((_a = appTheme.components.C4tDivider.variants) !== null && _a !== void 0 ? _a : {}),
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: 'Divider',
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsxs(Box, __assign({ jCss: {
                alignItems: 'start',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                minWidth: '360px',
                padding: '1rem',
            }, variant: 'flex-column' }, { children: [_jsx(Divider, __assign({ color: color }, props)), _jsx(Divider, __assign({ color: color, textAlignment: 'center' }, props, { children: text })), _jsx(Divider, __assign({ color: color, textAlignment: 'left' }, props, { children: text })), _jsx(Divider, __assign({ color: color, textAlignment: 'right' }, props, { children: text }))] }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Lighter = {
    args: {
        colorVariant: 'lighter',
    },
    render: renderThemeColorsAndMutations,
};
export var Light = {
    args: {
        colorVariant: 'light',
    },
    render: renderThemeColorsAndMutations,
};
export var Main = {
    args: {
        colorVariant: 'main',
    },
    render: renderThemeColorsAndMutations,
};
export var Dark = {
    args: {
        colorVariant: 'dark',
    },
    render: renderThemeColorsAndMutations,
};
export var Darker = {
    args: {
        colorVariant: 'darker',
    },
    render: renderThemeColorsAndMutations,
};
export var Text = {
    args: {
        colorVariant: 'text',
    },
    render: renderThemeColorsAndMutations,
};
