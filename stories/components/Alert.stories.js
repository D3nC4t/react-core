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
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Alert from '../../components/Alert';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { appTheme } from '../../theme';
Alert.displayName = 'Alert';
Box.displayName = 'Box';
Button.displayName = 'Button';
var meta = {
    title: 'Core/Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: Object.keys(appTheme.color),
            control: { type: 'select' },
        },
        $bgColor: {
            control: { type: 'color' },
        },
        $bColor: {
            control: { type: 'color' },
        },
        $bRadius: {
            control: { type: 'text' },
        },
        variant: {
            options: ['root', 'contained', 'outlined', 'shadowed'],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: 'This is the default alert box when no other props are passed!',
    },
};
export var DifferentCloseIcon = {
    args: {
        children: 'This is the default alert box with a different close icon!',
        closeIcon: faHome,
    },
};
export var WithCustomButton = {
    args: {
        children: 'This is the default alert box with a different close icon!',
        extraAction: _jsx(Button, __assign({ variant: 'outlined' }, { children: "Custom Button" })),
    },
};
var renderSeverities = function (props) {
    var _a;
    var $elements = [];
    for (var _i = 0, _b = ['error', 'info', 'success', 'warning']; _i < _b.length; _i++) {
        var severity = _b[_i];
        $elements.push(_jsxs(Alert, __assign({}, props, { severity: severity }, { children: ["This is an Alert type ", severity, ", using the ", (_a = props.color) !== null && _a !== void 0 ? _a : 'default', " color!"] })));
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
