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
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import BaseIcon from '../../components/Icon';
import Box from '../../components/Box';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import LocaleProvider from '../../translations/component';
import { appTheme } from '../../theme';
import { ButtonGroupControls } from '../controls';
BaseIcon.displayName = 'Icon';
Box.displayName = 'Box';
Button.displayName = 'Button';
ButtonGroup.displayName = 'ButtonGroup';
var meta = {
    title: 'Core/Components/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs', 'button'],
    argTypes: ButtonGroupControls,
};
export default meta;
var renderButtonGroup = function (props) { return (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsxs(ButtonGroup, __assign({}, props, { children: [_jsx(Button, { children: _jsx(FormattedMessage, { id: 'button-group.option', values: { number: 1 } }) }), _jsx(Button, { children: _jsx(FormattedMessage, { id: 'button-group.option', values: { number: 2 } }) }), _jsx(Button, __assign({ disabled: true }, { children: _jsx(FormattedMessage, { id: 'button-group.option', values: { number: 3 } }) }))] })) }))); };
export var Default = {
    args: {},
    render: renderButtonGroup,
};
var renderThemeColors = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $groups.push(renderButtonGroup(__assign({ color: color }, props)));
    }
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
export var Text = {
    args: {
        variant: 'text',
    },
    render: renderThemeColors,
};
export var Icon = {
    args: {
        variant: 'icon',
    },
    render: function (props) {
        var $groups = [];
        for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
            var color = _a[_i];
            $groups.push(_jsxs(ButtonGroup, __assign({ color: color }, props, { children: [_jsx(Button, { children: _jsx(BaseIcon, { icon: faCircleArrowDown }) }), _jsx(Button, { children: _jsx(BaseIcon, { icon: faCircleArrowDown }) }), _jsx(Button, __assign({ disabled: true }, { children: _jsx(BaseIcon, { icon: faCircleArrowDown }) }))] })));
        }
        return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
    },
};
