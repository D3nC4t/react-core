import { useCallback, useDebugValue, useEffect, useRef, useState, } from 'react';
export default function useDebouncedCallback(callback, deps, delay) {
    if (delay === void 0) { delay = 300; }
    var $callback = useCallback(callback, deps);
    var $timeout = useRef();
    var _a = useState($callback), debouncedCallback = _a[0], setDebouncedCallback = _a[1];
    useEffect(function () {
        setDebouncedCallback(function () { return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            $timeout.current && clearTimeout($timeout.current);
            $timeout.current = setTimeout(function () { return $callback.apply(void 0, args); }, delay);
        }); });
    }, [$callback, delay]);
    if (process.env.NODE_ENV !== 'production') {
        useDebugValue({ delay: delay, deps: deps });
    }
    return debouncedCallback;
}
