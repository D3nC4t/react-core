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
import { BoxExtendedControls } from './Box';
var SliderControls = __assign({ disabled: {
        description: 'If true, the Slider element is disabled',
        control: { type: 'boolean' },
    }, inputName: {
        description: 'The name for the hidden input',
        control: { type: 'text' },
    }, min: {
        description: 'The min value for the Slider element',
        control: { type: 'number' },
    }, marks: {
        description: 'It true will be shown some marks on the Slider element',
        control: { type: 'boolean' },
    }, max: {
        description: 'The max value for the Slider element',
        control: { type: 'number' },
    }, onChange: {
        description: 'The callback to call when the Slider element changes value',
        control: { type: 'null' },
    }, step: {
        description: 'The step value for the marks of the Slider element',
        control: { type: 'number' },
    }, value: {
        description: 'The value for the Slider element',
        control: { type: 'number' },
    }, variant: {
        description: 'The variant for the Slider element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tSlider.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, BoxExtendedControls);
export default SliderControls;
