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
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import { appTheme } from '../../theme';
import BoxControls from './Box';
import { ColorControls, ColorVariantControls } from './color';
import { DefaultC4tControls } from './default';
var CircularProgressControls = __assign(__assign(__assign(__assign({ hidePercentage: {
        description: 'If true will hide the percentage',
        control: { type: 'boolean' },
    }, max: {
        description: 'The max value for the CircularProgress element',
        control: { type: 'number' },
    }, min: {
        description: 'The min value for the CircularProgress element',
        control: { type: 'number' },
    }, percentage: {
        description: 'The percentage for the CircularProgress element',
        control: { type: 'number' },
    }, showRangeOnPercentage: {
        description: 'If true will show the range(value/max) instead of showing the percentage',
        control: { type: 'boolean' },
    }, value: {
        description: 'The value for the CircularProgress element',
        control: { type: 'number' },
    }, variant: {
        description: 'The variant for the CircularProgress element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tCircularProgress.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls), ColorControls), ColorVariantControls), _objectWithoutProperties(BoxControls !== null && BoxControls !== void 0 ? BoxControls : {}, ['variant']));
export default CircularProgressControls;
