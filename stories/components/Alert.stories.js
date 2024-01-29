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
import { FormattedMessage } from 'react-intl';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Alert from '../../components/Alert';
import Box from '../../components/Box';
import Button from '../../components/Button';
import LocaleProvider from '../../translations/component';
import { appTheme } from '../../theme';
import { AlertControls } from '../controls';
Alert.displayName = 'Alert';
Box.displayName = 'Box';
Button.displayName = 'Button';
var meta = {
    title: 'Core/Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: AlertControls,
};
export default meta;
export var Default = {
    args: {},
    render: function (props) { return (_jsx(Alert, __assign({}, props, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'alert.default' }) })) }))); },
};
export var DifferentCloseIcon = {
    args: {
        closeIcon: faHome,
    },
    render: function (props) { return (_jsx(Alert, __assign({}, props, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'alert.with-icon' }) })) }))); },
};
export var WithCustomButton = {
    args: {},
    render: function (props) { return (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(Alert, __assign({}, props, { extraAction: (_jsx(Button, __assign({ variant: 'outlined' }, { children: _jsx(FormattedMessage, { id: 'alert.extra-action.button' }) }))) }, { children: _jsx(FormattedMessage, { id: 'alert.extra-action' }) })) }))); },
};
var renderSeverities = function (props) {
    var $elements = [];
    for (var _i = 0, _a = ['error', 'info', 'success', 'warning']; _i < _a.length; _i++) {
        var severity = _a[_i];
        $elements.push(_jsx(Alert, __assign({}, props, { severity: severity }, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: props.color ? (_jsx(FormattedMessage, { id: 'alert.default-type.with-color', values: {
                        name: props.color,
                        severity: severity,
                    } })) : (_jsx(FormattedMessage, { id: 'alert.default-type', values: { severity: severity } })) })) })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-column' }, { children: $elements })));
};
var renderColors = function (props) {
    var $elements = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $elements.push(renderSeverities(__assign(__assign({}, props), { color: color })));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $elements })));
};
export var Severities = {
    args: {},
    render: renderSeverities,
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
