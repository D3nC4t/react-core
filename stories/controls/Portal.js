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
var PortalControls = __assign({ children: {
        description: 'The content of the Portal element',
        control: { type: 'null' },
    }, container: {
        description: 'The container of the Portal element, can be a document.body or a other DOM or ref element',
        control: { type: 'null' },
    }, onClose: {
        description: 'The callback fired when the component requests to be closed',
        control: { type: 'null' },
    }, onOpen: {
        description: 'The callback fired when the component requests to be opened',
        control: { type: 'null' },
    }, open: {
        description: 'If true, the component is shown with a fade transition',
        control: { type: 'boolean' },
    }, updateRef: {
        description: 'Should be a function that contains the logic to update the ref element on the parent component',
        control: { type: 'null' },
    }, variant: {
        description: 'The variant for the Portal element',
        options: __spreadArray([
            undefined
        ], Object.keys((_a = appTheme.components.C4tPortal.variants) !== null && _a !== void 0 ? _a : {}), true),
        control: { type: 'select' },
    }, $bShadow: {
        description: 'The box-shadow for the Portal element, can be a string or a theme reference',
        control: { type: 'text' },
    } }, _objectWithoutProperties(BoxControls !== null && BoxControls !== void 0 ? BoxControls : {}, ['variant']));
export default PortalControls;
