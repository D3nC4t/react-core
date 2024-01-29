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
import Divider from '../../components/Divider';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { DividerControls } from '../controls';
Box.displayName = 'Box';
Divider.displayName = 'Divider';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Divider',
    component: Divider,
    tags: ['autodocs'],
    argTypes: DividerControls,
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
        $groups.push(_jsx(Box, __assign({ jCss: {
                alignItems: 'start',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                minWidth: '360px',
                padding: '1rem',
            }, variant: 'flex-column' }, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsx(Typography, __assign({ variant: 'h4' }, { children: _jsx(FormattedMessage, { id: 'examples.color', values: { name: color } }) })), _jsx(Divider, __assign({ color: color }, props)), _jsx(Divider, __assign({ color: color, textAlignment: 'center' }, props, { children: _jsx(FormattedMessage, { id: 'var', values: { name: 'textAlignment', value: 'center' } }) })), _jsx(Divider, __assign({ color: color, textAlignment: 'left' }, props, { children: _jsx(FormattedMessage, { id: 'var', values: { name: 'textAlignment', value: 'left' } }) })), _jsx(Divider, __assign({ color: color, textAlignment: 'right' }, props, { children: _jsx(FormattedMessage, { id: 'var', values: { name: 'textAlignment', value: 'right' } }) }))] })) }), color));
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
