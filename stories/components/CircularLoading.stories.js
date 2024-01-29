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
import CircularLoading from '../../components/CircularLoading';
import Box from '../../components/Box';
import { CircularLoadingControls } from '../controls';
CircularLoading.displayName = 'CircularLoading';
var meta = {
    title: 'Core/Components/CircularLoading',
    component: CircularLoading,
    tags: ['autodocs'],
    argTypes: CircularLoadingControls,
};
export default meta;
export var Default = {
    args: {},
    render: function (props) { return (_jsx(Box, __assign({ jCss: {
            position: 'relative',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } }, { children: _jsx(CircularLoading, __assign({}, props)) }))); },
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: function (props) { return (_jsx(Box, __assign({ jCss: {
            position: 'relative',
            width: '8px',
            height: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } }, { children: _jsx(CircularLoading, __assign({}, props)) }))); },
};
export var Rainbow = {
    args: {
        variant: 'rainbow',
    },
    render: function (props) { return (_jsx(Box, __assign({ jCss: {
            position: 'relative',
            width: '120px',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } }, { children: _jsx(CircularLoading, __assign({}, props)) }))); },
};
export var Svg = {
    args: {
        variant: 'svg',
    },
    render: function (props) { return (_jsx(Box, __assign({ jCss: {
            position: 'relative',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } }, { children: _jsx(CircularLoading, __assign({}, props)) }))); },
};
