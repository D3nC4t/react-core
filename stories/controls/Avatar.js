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
var AvatarControls = __assign({ boxProps: {
        description: 'The props for the Box element',
        control: { type: 'object' },
    }, children: {
        description: 'The value to be shown as content of the Avatar, it can be a string or a ReactElement'
            + ' Note that if this prop is used, the src prop will be ignored',
        control: { type: 'null' },
    }, src: {
        description: 'The source for the image to be used as content of the Avatar',
        control: { type: 'text' },
    }, variant: {
        description: 'The variant for the Avatar element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tAvatar.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls);
export default AvatarControls;
