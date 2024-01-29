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
import { DefaultC4tControls } from './default';
var TextAreaControls = __assign({ boxProps: {
        description: 'The props for the Box element',
        control: { type: 'null' },
    }, disabled: {
        description: 'If the TextArea element is disabled',
        control: { type: 'boolean' },
    }, inputName: {
        description: 'The name for the hidden input element',
        control: { type: 'text' },
    }, invalid: {
        description: 'If the TextArea element is invalid',
        control: { type: 'boolean' },
    }, resize: {
        description: 'If true, the TextArea can be resized',
        options: [undefined, 'none', 'both', 'horizontal', 'vertical'],
        control: { type: 'select' },
    }, rows: {
        description: 'The number of rows for the TextArea element',
        control: { type: 'number' },
    }, value: {
        description: 'The value for the TextArea element',
        control: { type: 'text' },
    }, variant: {
        description: 'The variant for the TextArea element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tTextArea.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    }, width: {
        description: 'The width for the TextArea element',
        control: { type: 'text' },
    } }, DefaultC4tControls);
export default TextAreaControls;
