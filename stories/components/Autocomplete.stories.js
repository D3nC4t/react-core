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
import Autocomplete from '../../components/Autocomplete';
import Box from '../../components/Box';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import { useTranslations } from '../../translations';
import { appTheme } from '../../theme';
import { AutocompleteControls } from '../controls';
Autocomplete.displayName = 'Autocomplete';
Box.displayName = 'Box';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Autocomplete',
    component: Autocomplete,
    tags: ['select'],
    argTypes: AutocompleteControls,
};
export default meta;
var TranslatedAutocomplete = function (props) {
    var intl = useTranslations('storybook')[0];
    return (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsxs(Autocomplete, __assign({ title: props.multiple
                ? intl.formatMessage({ id: 'autocomplete.multiple' })
                : intl.formatMessage({ id: 'autocomplete.single' }) }, props, { children: [_jsx("span", { children: _jsx(FormattedMessage, { id: 'autocomplete.test-option', values: { index: 1 } }) }, 'test1'), _jsx("span", { children: _jsx(FormattedMessage, { id: 'autocomplete.test-option', values: { index: 2 } }) }, 'test2'), _jsx("span", { children: _jsx(FormattedMessage, { id: 'autocomplete.test-option', values: { index: 3 } }) }, 'test3')] })) })));
};
export var Default = {
    args: {},
    render: function (props) { return (_jsx(TranslatedAutocomplete, __assign({}, props))); },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    !props.children && (props.children = [
        _jsx("span", { children: "Test 1" }, 'test1'),
        _jsx("span", { children: "Test 2" }, 'test2'),
        _jsx("span", { children: "Test 3" }, 'test3'),
    ]);
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $groups.push(_jsx(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
            }, variant: 'flex-column' }, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsx(FormattedMessage, { id: 'examples.color', values: { name: color } }), _jsxs(Typography, __assign({ variant: 'p' }, { children: [_jsx(FormattedMessage, { id: 'autocomplete.mutation.single' }), _jsx(TranslatedAutocomplete, __assign({ color: color, value: 'test1' }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: [_jsx(FormattedMessage, { id: 'autocomplete.mutation.multiple' }), _jsx(TranslatedAutocomplete, __assign({ color: color, multiple: true, value: ['test1', 'test3'] }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: [_jsx(FormattedMessage, { id: 'disabled' }), _jsx(TranslatedAutocomplete, __assign({ color: color, disabled: true, value: 'test1' }, props))] })), _jsxs(Typography, __assign({ variant: 'p' }, { children: [_jsx(FormattedMessage, { id: 'invalid' }), _jsx(TranslatedAutocomplete, __assign({ color: color, invalid: true, value: 'test1' }, props))] }))] })) })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Dashed = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var OutlinedSandwich = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'outlined-sandwich',
    },
    render: renderThemeColorsAndMutations,
};
export var Rounded = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'round-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var Sandwich = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'sandwich',
    },
    render: renderThemeColorsAndMutations,
};
export var Shadowed = {
    args: {
        onChange: function (selected) { return console.log(selected); },
        usePopover: true,
        variant: 'shadowed',
    },
    render: renderThemeColorsAndMutations,
};
