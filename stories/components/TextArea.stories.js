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
import Box from '../../components/Box';
import LocaleProvider from '../../translations/component';
import TextArea from '../../components/TextArea';
import Typography from '../../components/Typography';
import { useTranslations } from '../../translations';
import { appTheme } from '../../theme';
import { TextAreaControls } from '../controls';
Box.displayName = 'Box';
TextArea.displayName = 'TextArea';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    argTypes: TextAreaControls,
};
export default meta;
export var Default = {
    args: {},
};
var renderThemeColorsAndMutations = function (props) {
    var _a = useTranslations('storybook'), intl = _a[0], hasLoadedIntl = _a[1];
    var $groups = [];
    for (var _i = 0, _b = Object.keys(appTheme.color); _i < _b.length; _i++) {
        var color = _b[_i];
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
            }, variant: 'flex-column' }, { children: [_jsx(Typography, __assign({ variant: 'h4' }, { children: _jsx(FormattedMessage, { id: 'color', values: { name: color } }) })), _jsx(TextArea, __assign({ color: color, value: intl.formatMessage({ id: 'some-text' }) }, props)), _jsx(TextArea, __assign({ color: color, disabled: true, value: intl.formatMessage({ id: 'disabled' }) }, props)), _jsx(TextArea, __assign({ color: color, invalid: true, value: intl.formatMessage({ id: 'invalid' }) }, props))] })));
    }
    return (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(Box, __assign({ variant: 'flex-row' }, { children: hasLoadedIntl && $groups })) })));
};
export var Root = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var Contained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'contained',
    },
    render: renderThemeColorsAndMutations,
};
export var Dashed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dashed',
    },
    render: renderThemeColorsAndMutations,
};
export var Dotted = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'dotted',
    },
    render: renderThemeColorsAndMutations,
};
export var Outlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundOutlined = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'round-outlined',
    },
    render: renderThemeColorsAndMutations,
};
export var Rounded = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var Shadowed = {
    args: {
        onChange: function (e) { return console.log(e.target.value); },
        variant: 'shadowed',
    },
    render: renderThemeColorsAndMutations,
};
