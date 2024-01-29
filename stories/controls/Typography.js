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
import { ColorControls, ColorVariantControls } from './color';
var TypographyControls = __assign(__assign(__assign({ children: {
        description: 'The content of the Typography element, ideally should be a string, but accepts a ReactElement',
        control: { type: 'null' },
    }, fontFamily: {
        description: 'The font family to force on the Typography element, by default it uses the theme font family',
        control: { type: 'text' },
    }, tag: {
        description: 'The tag for the Typography element',
        options: [
            undefined, 'a', 'em', 'b', 'del', 'div', 'h1', 'h2', 'h3', 'h4',
            'h5', 'h6', 'i', 'ins', 'mark', 'p', 'small', 'span', 'sub', 'sup',
        ],
        control: { type: 'select' },
    }, variant: {
        description: 'The variant for the Typography element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tTypography.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls), ColorControls), ColorVariantControls);
export default TypographyControls;
