import { ForwardRef, Memo } from 'react-is';
var fnNameMatchExp = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
export function getFunctionName(fn) {
    var match = "".concat(fn).match(fnNameMatchExp);
    return (match && match[1]) || '';
}
function getFunctionOrComponentName(Component, fallback) {
    if (fallback === void 0) { fallback = ''; }
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    var functionName = getFunctionOrComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
export default function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionOrComponentName(Component, 'Component');
    }
    if (typeof Component === 'object') {
        switch (Component.$$typeof) {
            case ForwardRef:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case Memo:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
