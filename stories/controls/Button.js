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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
import { appTheme } from '../../theme';
import { ColorControls } from './color';
import { DefaultC4tControls } from './default';
var ButtonControls = __assign(__assign({ children: {
        description: 'The children for the Button element, it can be a string, a number or a ReactElement',
        control: { type: 'text' },
    }, disabled: {
        description: 'If the Button element should be shown as disabled',
        control: { type: 'boolean' },
    }, endIcon: {
        description: 'The icon to show at the end of the Button element',
        control: { type: 'null' },
    }, endIconProps: {
        description: 'The props for the endIcon element',
        control: { type: 'object' },
    }, size: {
        description: 'The size for the Button element',
        options: [
            undefined, 'small', 'medium', 'large'
        ],
        control: { type: 'select' },
    }, startIcon: {
        description: 'The icon to show at the start of the Button element',
        control: { type: 'null' },
    }, startIconProps: {
        description: 'The props for the startIcon element',
        control: { type: 'object' },
    }, typographyProps: {
        description: 'The props for the Typography element',
        control: { type: 'object' },
    }, variant: {
        description: 'The variant for the Button element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tButton.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls), ColorControls);
export default ButtonControls;
