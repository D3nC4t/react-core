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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from 'react';
import { Transition } from 'react-transition-group';
import Box from './Box';
import styled from '../theme/styled';
var StyledBox = styled(Box, {
    dontForwardProp: ['duration'],
})(function (_a) {
    var duration = _a.duration;
    return ({
        transition: "opacity ".concat(duration, "ms ease-in-out"),
        opacity: 0,
    });
});
var transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
};
export var Fade = forwardRef(function (_a, ref) {
    var _b = _a.boxProps, boxProps = _b === void 0 ? {} : _b, children = _a.children, _c = _a.duration, duration = _c === void 0 ? 3000 : _c, _d = _a.in, _in = _d === void 0 ? false : _d, _e = _a.jCss, jCss = _e === void 0 ? {} : _e, _f = _a.name, name = _f === void 0 ? 'C4tFade' : _f, variant = _a.variant, props = __rest(_a, ["boxProps", "children", "duration", "in", "jCss", "name", "variant"]);
    return (_jsx(Transition, __assign({ in: _in, timeout: duration }, props, { children: function (status) { return _jsx(StyledBox, __assign({ duration: duration, jCss: __assign(__assign({}, transitionStyles[status]), jCss), name: name, ref: ref, variant: variant }, boxProps, { children: children })); } })));
});
Fade.displayName = 'C4tFade';
export default Fade;
