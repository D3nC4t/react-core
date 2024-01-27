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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useEffect, useState } from 'react';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import styled, { getClassName } from '../theme/styled';
import useDefaultProps from '../theme/hooks/useDefaultProps';
export var Box = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? 'C4tBox' : _b, tag = _a.tag, inputProps = __rest(_a, ["children", "name", "tag"]);
    var withProps = useDefaultProps(inputProps, name);
    var htmlTag = useState(tag !== null && tag !== void 0 ? tag : 'div')[0];
    var _c = useState(), $el = _c[0], set$el = _c[1];
    useEffect(function () {
        var StyledBox = styled(htmlTag, {
            dontForwardProp: ['tag'],
        })(function (_a) {
            var theme = _a.theme, props = __rest(_a, ["theme"]);
            return (__assign(__assign(__assign(__assign({}, (props.$bgColor && {
                backgroundColor: theme.get.color(props.$bgColor, props.$bgColorVariant),
            })), ((props.$bSize || props.$bUnit || props.$bShape || props.$bColor) && {
                border: theme.get.border(props.$bSize, props.$bUnit, props.$bShape, props.$bColor, props.$bColorVariant),
            })), (props.$bRadius && {
                borderRadius: typeof props.$bRadius === 'function'
                    ? props.$bRadius(theme)
                    : props.$bRadius,
            })), (props.$gap && { gap: props.$gap })));
        });
        set$el(StyledBox);
    }, [htmlTag]);
    return ($el ? _jsx($el, __assign({ className: getClassName(withProps, name, withProps.variant), name: name, ref: ref }, _objectWithoutProperties(withProps, [
        'className',
    ]), { children: children })) : _jsx(_Fragment, {}));
});
Box.displayName = 'C4tBox';
export default Box;
