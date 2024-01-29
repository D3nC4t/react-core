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
var PaperControls = __assign({ children: {
        description: 'The value to be shown as content of the div, it can be a string or a ReactElement',
        control: { type: 'null' },
    }, variant: {
        description: 'The variant for the paper element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tPaper.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    }, $bShadow: {
        description: 'The shadow to be used, could be used a Shadow from theme or the full css shadow value',
        control: { type: 'text' },
    } }, _objectWithoutProperties(BoxControls !== null && BoxControls !== void 0 ? BoxControls : {}, ['variant']));
export var PaperExtendedControls = __assign({ paperVariant: PaperControls.variant }, _objectWithoutProperties(PaperControls, ['variant']));
export default PaperControls;
