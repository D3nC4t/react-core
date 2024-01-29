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
var BackdropControls = __assign(__assign(__assign({ children: {
        description: 'The children for the Backdrop element',
        control: { type: 'null' },
    }, boxProps: {
        description: 'The props for the Box element',
        control: { type: 'object' },
    }, in: {
        description: 'If the Backdrop should be shown or not, when changed to true will trigger the fade in effect',
        control: { type: 'boolean' },
    }, variant: {
        description: 'The variant for the Backdrop element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tBackdrop.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls), ColorControls), { $bottom: {
        description: 'The bottom position for the Backdrop element, should contain the unit',
        control: { type: 'number' },
    }, $fadeProps: {
        description: 'The props for the Fade element',
        control: { type: 'object' },
    }, $height: {
        description: 'The height for the Backdrop element, should contain the unit'
            + ', note that will be ignored if both $top and $bottom are defined',
        control: { type: 'text' },
    }, $invisible: {
        description: 'If true the Backdrop wont have a background color, it will be transparent',
        control: { type: 'boolean' },
    }, $left: {
        description: 'The left position for the Backdrop element, should contain the unit',
        control: { type: 'number' },
    }, $position: {
        description: 'The position for the Backdrop element',
        options: [
            undefined, 'absolute', 'fixed', 'relative', 'static', 'inherit', 'initial'
        ],
        control: { type: 'select' },
    }, $right: {
        description: 'The right position for the Backdrop element, should contain the unit',
        control: { type: 'number' },
    }, $top: {
        description: 'The top position for the Backdrop element, should contain the unit',
        control: { type: 'number' },
    }, $width: {
        description: 'The width for the Backdrop element, should contain the unit'
            + ', note that will be ignored if both $left and $right are defined',
        control: { type: 'text' },
    } });
export default BackdropControls;
