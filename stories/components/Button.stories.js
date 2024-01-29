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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import { faAnglesDown, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { ButtonControls } from '../controls';
Box.displayName = 'Box';
Button.displayName = 'Button';
var meta = {
    title: 'Core/Components/Button',
    component: Button,
    tags: ['button'],
    argTypes: ButtonControls,
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
        $groups.push(_jsx(Button, __assign({}, props, { color: color }, { children: color })));
    }
    $groups.push(_jsx(Button, __assign({}, props, { disabled: true }, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'disabled' }) })) })));
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
        $groups.push(_jsx(Button, __assign({}, props, { variant: 'icon', disabled: true }, { children: _jsx(FontAwesomeIcon, { icon: faCircleArrowDown }) })));
        return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
    },
};
var renderStartAneEndIconThemeColorsAndVariants = function (props) {
    var _a;
    var $groups = [];
    var variants = Object.keys((_a = appTheme.components.C4tButton.variants) !== null && _a !== void 0 ? _a : {})
        .filter(function (variant) { return !['icon'].includes(variant); });
    for (var _i = 0, variants_1 = variants; _i < variants_1.length; _i++) {
        var variant = variants_1[_i];
        $groups.push(_jsxs(Box, __assign({ jCss: {
                alignItems: 'start',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                padding: '1rem',
            }, variant: 'flex-column' }, { children: [_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(Typography, __assign({ variant: 'h4', tag: 'div' }, { children: _jsx(FormattedMessage, { id: 'variant', values: { name: variant } }) })) })), renderThemeColors(__assign(__assign({}, props), { variant: variant }))] }), variant));
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
