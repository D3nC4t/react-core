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
var InputControls = __assign(__assign(__assign({ boxProps: {
        description: 'The props for the box component',
        control: { type: 'object' },
    }, endAdornment: {
        description: 'The endAdornment for the Input element, can be a ReactElement',
        control: { type: 'null' },
    } }, ColorControls), { disabled: {
        description: 'If true will disable the Input element',
        control: { type: 'boolean' },
    }, inputName: {
        description: 'The name for the hidden input element',
        control: { type: 'text' },
    }, invalid: {
        description: 'If true will show the Input element with the invalid styles',
        control: { type: 'boolean' },
    }, onChange: {
        description: 'Callback fired when the value changes'
            + ', this is debounced, uses the last value after 300ms without changes',
        control: { type: 'null' },
    }, pattern: {
        description: 'The pattern for the input element, use it to validate the input',
        control: { type: 'text' },
    }, startAdornment: {
        description: 'The start adornment for the Input element, can be a ReactElement',
        control: { type: 'null' },
    }, value: {
        description: 'The value for the Input element',
        control: { type: 'text' },
    }, variant: {
        description: 'The variant for the Input element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tInput.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    }, width: {
        description: 'The width for the Input element, should be a number in pixels',
        control: { type: 'number' },
    } }), DefaultC4tControls);
export default InputControls;
