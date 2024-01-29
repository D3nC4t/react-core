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
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import { DefaultC4tControls } from './default';
import ModalControls from './Modal';
var DrawerControls = __assign(__assign({ modalVariant: ModalControls === null || ModalControls === void 0 ? void 0 : ModalControls.variant, variant: ModalControls === null || ModalControls === void 0 ? void 0 : ModalControls.portalVariant }, DefaultC4tControls), _objectWithoutProperties(ModalControls !== null && ModalControls !== void 0 ? ModalControls : {}, ['portalVariant', 'variant']));
export default DrawerControls;
