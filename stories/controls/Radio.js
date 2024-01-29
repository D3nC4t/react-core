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
import { BoxExtendedControls } from './Box';
import { ColorControls } from './color';
import { DefaultC4tControls } from './default';
var RadioControls = __assign(__assign(__assign({ checkedIcon: {
        description: 'The icon to show when the Radio element is checked',
        control: { type: 'null' },
    }, disabled: {
        description: 'If the Radio element should be shown as disabled',
        control: { type: 'boolean' },
    }, inputName: {
        description: 'The name for the hidden input',
        control: { type: 'text' },
    }, invalid: {
        description: 'If the Radio element should be shown as invalid',
        control: { type: 'boolean' },
    }, onChange: {
        description: 'The callback to call when the Radio element changes state',
        control: { type: 'null' },
    }, value: {
        description: 'The value for the Radio element',
        control: { type: 'text' },
    }, type: {
        description: 'The type for the hidden input element',
        options: [
            undefined, 'checkbox', 'radio'
        ],
        control: { type: 'select' },
    }, uncheckedIcon: {
        description: 'The icon to show when the Radio element is unchecked',
        control: { type: 'null' },
    }, variant: {
        description: 'The variant for the Radio element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tRadio.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    } }, DefaultC4tControls), ColorControls), _objectWithoutProperties(BoxExtendedControls !== null && BoxExtendedControls !== void 0 ? BoxExtendedControls : {}, ['variant']));
export default RadioControls;
