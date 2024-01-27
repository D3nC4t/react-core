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
import { jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { appTheme } from '../../theme';
Box.displayName = 'Box';
Button.displayName = 'Button';
var meta = {
    title: 'Core/Components/Button',
    component: Button,
    tags: ['autodocs', 'button'],
    argTypes: {
        variant: {
            options: ['contained', 'dashed', 'dotted', 'icon', 'outlined', 'root', 'shadowed', 'text'],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: 'Button',
    },
};
var renderThemeColors = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        $groups.push(_jsx(Button, __assign({}, props, { color: color }, { children: text })));
    }
    $groups.push(_jsx(Button, __assign({}, props, { disabled: true }, { children: "Disabled" })));
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: renderThemeColors,
};
export var Contained = {
    args: {
        variant: 'contained',
    },
    render: renderThemeColors,
};
export var Dashed = {
    args: {
        variant: 'dashed',
    },
    render: renderThemeColors,
};
export var Dotted = {
    args: {
        variant: 'dotted',
    },
    render: renderThemeColors,
};
export var Outlined = {
    args: {
        variant: 'outlined',
    },
    render: renderThemeColors,
};
export var Shadowed = {
    args: {
        variant: 'shadowed',
    },
    render: renderThemeColors,
};
export var Text = {
    args: {
        variant: 'text',
    },
    render: renderThemeColors,
};
export var Icon = {
    render: function (props) {
        var $groups = [];
        for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
            var color = _a[_i];
            $groups.push(_jsx(Button, __assign({}, props, { variant: 'icon', color: color }, { children: _jsx(FontAwesomeIcon, { icon: faCircleArrowDown }) })));
        }
        $groups.push(_jsx(Button, __assign({}, props, { disabled: true }, { children: "Disabled" })));
        return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
    },
};
var renderStartAneEndIconThemeColorsAndVariants = function (props) {
    var $groups = [];
    var variants = [
        'root',
        'contained',
        'dashed',
        'dotted',
        'outlined',
        'shadowed',
        'text',
    ];
    for (var _i = 0, variants_1 = variants; _i < variants_1.length; _i++) {
        var variant = variants_1[_i];
        $groups.push(renderThemeColors(__assign(__assign({}, props), { variant: variant })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-column' }, { children: $groups })));
};
export var StartIcon = {
    args: {
        startIcon: faAnglesDown,
    },
    render: renderStartAneEndIconThemeColorsAndVariants,
};
export var EndIcon = {
    args: {
        endIcon: faAnglesDown,
    },
    render: renderStartAneEndIconThemeColorsAndVariants,
};
