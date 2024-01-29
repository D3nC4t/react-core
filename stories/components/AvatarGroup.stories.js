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
import { FormattedMessage } from 'react-intl';
import Avatar from '../../components/Avatar';
import AvatarGroup from '../../components/AvatarGroup';
import Box from '../../components/Box';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { AvatarGroupControls } from '../controls';
Avatar.displayName = 'Avatar';
Box.displayName = 'Box';
AvatarGroup.displayName = 'AvatarGroup';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/AvatarGroup',
    component: AvatarGroup,
    tags: ['avatar', 'group'],
    argTypes: AvatarGroupControls,
};
export default meta;
export var Default = {
    args: {
        children: [
            _jsx(Avatar, { alt: 'Avatar 1', src: 'aaa' }, 'Avatar 1'),
            _jsx(Avatar, { alt: 'Avatar 2', src: 'aaa' }, 'Avatar 2'),
            _jsx(Avatar, { alt: 'Avatar 3', src: 'aaa' }, 'Avatar 3'),
            _jsx(Avatar, { alt: 'Avatar 4', src: 'aaa' }, 'Avatar 4'),
            _jsx(Avatar, { alt: 'Avatar 5', src: 'aaa' }, 'Avatar 5'),
        ],
    },
};
export var CustomSurplus = {
    args: {
        children: [
            _jsx(Avatar, { alt: 'Avatar 1', src: 'aaa' }, 'Avatar 1'),
            _jsx(Avatar, { alt: 'Avatar 2', src: 'aaa' }, 'Avatar 2'),
            _jsx(Avatar, { alt: 'Avatar 3', src: 'aaa' }, 'Avatar 3'),
            _jsx(Avatar, { alt: 'Avatar 4', src: 'aaa' }, 'Avatar 4'),
            _jsx(Avatar, { alt: 'Avatar 5', src: 'aaa' }, 'Avatar 5'),
        ],
        renderSurplus: function (remaining) { return (_jsxs(Avatar, __assign({ variant: 'outlined', boxProps: {
                $bColor: 'grey',
            } }, { children: ["+", remaining.toString()[0], "k"] }))); },
        total: 4050,
        variant: 'contained',
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $groups.push(_jsx(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsx(Typography, __assign({ variant: 'h4', tag: 'div' }, { children: _jsx(FormattedMessage, { id: 'examples.color', values: { name: color } }) })), _jsxs(AvatarGroup, __assign({}, props, { "$bColor": color, "$bgColor": color }, { children: [_jsx(Avatar, { alt: 'Avatar 1', src: 'aaa' }, 'Avatar 1'), _jsx(Avatar, { alt: 'Avatar 2', src: 'aaa' }, 'Avatar 2'), _jsx(Avatar, { alt: 'Avatar 3', src: 'aaa' }, 'Avatar 3'), _jsx(Avatar, { alt: 'Avatar 4', src: 'aaa' }, 'Avatar 4'), _jsx(Avatar, { alt: 'Avatar 5', src: 'aaa' }, 'Avatar 5')] })), _jsxs(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: [_jsxs(AvatarGroup, __assign({}, props, { max: 3, "$bColor": color, "$bgColor": color }, { children: [_jsx(Avatar, { alt: 'Avatar 1', src: 'aaa' }, 'Avatar 1'), _jsx(Avatar, { alt: 'Avatar 2', src: 'aaa' }, 'Avatar 2'), _jsx(Avatar, { alt: 'Avatar 3', src: 'aaa' }, 'Avatar 3'), _jsx(Avatar, { alt: 'Avatar 4', src: 'aaa' }, 'Avatar 4'), _jsx(Avatar, { alt: 'Avatar 5', src: 'aaa' }, 'Avatar 5')] })), _jsx(FormattedMessage, { id: 'max', values: { number: 3 } })] }))] })) }), color));
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
