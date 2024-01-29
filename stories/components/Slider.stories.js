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
import Slider from '../../components/Slider';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { SliderControls } from '../controls';
Box.displayName = 'Box';
Slider.displayName = 'Slider';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Slider',
    component: Slider,
    tags: ['slider'],
    argTypes: SliderControls,
};
export default meta;
export var Default = {
    args: {},
};
var renderColors = function (props) {
    var $elements = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $elements.push(_jsxs(Box, __assign({ variant: 'flex-column', jCss: { width: '100%' } }, { children: [_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(Typography, __assign({ variant: 'h2' }, { children: _jsx(FormattedMessage, { id: 'color', values: { name: color } }) })) })), _jsx(Box, __assign({ variant: 'flex-row', jCss: { width: '50%' } }, { children: _jsx(Slider, __assign({}, props, { color: color, value: 4 })) })), _jsx(Box, __assign({ variant: 'flex-row', jCss: { width: '50%' } }, { children: _jsx(Slider, __assign({}, props, { color: color, disabled: true, value: 11 })) })), _jsx(Box, __assign({ variant: 'flex-row', jCss: { width: '50%' } }, { children: _jsx(Slider, __assign({}, props, { color: color, marks: true, disabled: true, value: 94 })) })), _jsx(Box, __assign({ variant: 'flex-row', jCss: { width: '50%' } }, { children: _jsx(Slider, __assign({}, props, { color: color, max: 150, min: 10, step: 10, value: 60 })) })), _jsx(Box, __assign({ variant: 'flex-row', jCss: { width: '50%' } }, { children: _jsx(Slider, __assign({}, props, { color: color, marks: true, max: 360, min: 180, step: 5, value: 240 })) }))] })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-column' }, { children: $elements })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: renderColors,
};
export var Contained = {
    args: {
        variant: 'contained',
    },
    render: renderColors,
};
export var Dashed = {
    args: {
        variant: 'dashed',
    },
    render: renderColors,
};
export var Dotted = {
    args: {
        variant: 'dotted',
    },
    render: renderColors,
};
export var Outlined = {
    args: {
        variant: 'outlined',
    },
    render: renderColors,
};
export var Shadowed = {
    args: {
        variant: 'shadowed',
    },
    render: renderColors,
};
