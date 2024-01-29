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
import { useTranslations } from '../../translations';
import { appTheme } from '../../theme';
import { InputControls } from '../controls';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Input.displayName = 'Input';
var meta = {
    title: 'Core/Components/Input',
    component: Input,
    tags: ['inputs'],
    argTypes: InputControls,
};
export default meta;
var ThemeColorsAndMutations = function (props) {
    var _a = useTranslations('storybook'), intl = _a[0], hasLoadedIntl = _a[1];
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
    for (var _i = 0, _b = Object.keys(appTheme.color); _i < _b.length; _i++) {
        var color = _b[_i];
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
            }, variant: 'flex-column' }, { children: [_jsx(Input, __assign({ color: color, value: intl.formatMessage({ id: 'some-text' }) }, props)), _jsx(Input, __assign({ color: color, startAdornment: $startAdornment, value: intl.formatMessage({ id: 'input.start-adornment' }) }, props)), _jsx(Input, __assign({ color: color, endAdornment: $endAdornment, value: intl.formatMessage({ id: 'input.end-adornment' }) }, props)), _jsx(Input, __assign({ color: color, endAdornment: $endAdornment, startAdornment: $startAdornment, value: intl.formatMessage({ id: 'input.both-adornment' }) }, props)), _jsx(Input, __assign({ color: color, disabled: true, startAdornment: $startAdornment, value: intl.formatMessage({ id: 'disabled' }) }, props)), _jsx(Input, __assign({ color: color, invalid: true, startAdornment: $startAdornment, value: intl.formatMessage({ id: 'invalid' }) }, props))] })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: hasLoadedIntl && $groups })));
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
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Contained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'contained',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Dashed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dashed',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Dotted = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dotted',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Outlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'outlined',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var RoundContained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-contained',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var RoundOutlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-outlined',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Rounded = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'rounded',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
export var Shadowed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'shadowed',
    },
    render: function (props) { return _jsx(ThemeColorsAndMutations, __assign({}, props)); },
};
