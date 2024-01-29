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
import Switch from '../../components/Switch';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { SwitchControls } from '../controls';
Box.displayName = 'Box';
Switch.displayName = 'Switch';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: SwitchControls,
};
export default meta;
export var Default = {
    args: {},
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: [_jsx(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'color', values: { name: color } }) })) })), _jsx(Switch, __assign({}, props, { color: color, value: false })), _jsx(Switch, __assign({}, props, { color: color, value: true }))] }), color));
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
export var Rounded = {
    args: {
        variant: 'rounded',
    },
    render: renderThemeColorsAndMutations,
};
export var RoundContained = {
    args: {
        variant: 'round-contained',
    },
    render: renderThemeColorsAndMutations,
};
