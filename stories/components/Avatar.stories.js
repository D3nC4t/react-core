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
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../components/Avatar';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
Avatar.displayName = 'Avatar';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Avatar',
    component: Avatar,
    tags: ['avatar'],
    argTypes: {
        variant: {
            options: [
                'contained', 'dashed', 'dotted', 'outlined', 'root', 'shadowed',
                'round-contained', 'round-dashed', 'round-dotted',
                'round-outlined', 'round-root', 'round-shadowed',
                'square-contained', 'square-dashed', 'square-dotted',
                'square-outlined', 'square-root', 'square-shadowed',
            ],
            control: { type: 'select' },
        }
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
            }, variant: 'flex-column' }, { children: [_jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Avatar, __assign({ alt: text, src: 'aaa' }, props, { boxProps: __assign(__assign({}, props.boxProps), { $bColor: color, $bgColor: color }) })), "Alt text ", text] })), _jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Avatar, __assign({ alt: text, src: 'https://cdn-icons-png.flaticon.com/512/168/168720.png' }, props, { boxProps: __assign(__assign({}, props.boxProps), { $bColor: color, $bgColor: color }) }, props)), "Image"] })), _jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsx(Avatar, __assign({}, props, { boxProps: __assign(__assign({}, props.boxProps), { $bColor: color, $bgColor: color }) }, props, { children: _jsx(Icon, { icon: faHome }) })), "Custom"] }))] }), color));
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
export var Dashed = {
    args: {
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var Shadowed = {
    args: {
        variant: 'shadowed',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundRoot = {
    args: {
        variant: 'round-root',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundDashed = {
    args: {
        variant: 'round-dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundDotted = {
    args: {
        variant: 'round-dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
    args: {
        variant: 'round-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundShadowed = {
    args: {
        variant: 'round-shadowed',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareRoot = {
    args: {
        variant: 'square-root',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareContained = {
    args: {
        variant: 'square-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareDashed = {
    args: {
        variant: 'square-dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareDotted = {
    args: {
        variant: 'square-dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareOutlined = {
    args: {
        variant: 'square-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var SquareShadowed = {
    args: {
        variant: 'square-shadowed',
    },
    render: renderThemeColorsAndMutations,
};
