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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Badge from '../../components/Badge';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import { appTheme } from '../../theme';
Badge.displayName = 'Badge';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
var meta = {
    title: 'Core/Components/Badge',
    component: Badge,
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
        text: {
            control: { type: 'text' },
        },
        variant: {
            options: ['root'],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        text: 11,
        children: 'Badge',
    },
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
            }, variant: 'flex-column' }, { children: [_jsxs(Badge, __assign({}, props, { color: color }, { children: ["No text: ", text] })), _jsxs(Badge, __assign({}, props, { text: 411, color: color }, { children: ["With text: ", text] }))] }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var BottomRight = {
    args: {
        variant: 'root',
        position: 'bottom-right',
    },
    render: renderThemeColorsAndMutations,
};
export var BottomLeft = {
    args: {
        variant: 'root',
        position: 'bottom-left',
    },
    render: renderThemeColorsAndMutations,
};
export var TopRight = {
    args: {
        variant: 'root',
        position: 'top-right',
    },
    render: renderThemeColorsAndMutations,
};
export var TopLeft = {
    args: {
        variant: 'root',
        position: 'top-left',
    },
    render: renderThemeColorsAndMutations,
};
