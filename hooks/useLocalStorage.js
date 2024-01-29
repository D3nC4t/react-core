import { useState, useEffect } from 'react';
import { getLocalItem, setLocalItem, setLocalItemTtl } from '../utils/localSorage';
var setNewValueCallback = function (setValue, key, ttl) {
    if (ttl === void 0) { ttl = null; }
    return function (newValue) {
        setValue(function (currentValue) {
            var valueToStore = typeof newValue === 'function' ? newValue(currentValue) : newValue;
            setLocalItem(key, valueToStore, true);
            if (ttl) {
                setLocalItemTtl(key, ttl);
            }
            return valueToStore;
        });
    };
};
export default function useLocalStorage(key, defaultValue, ttl) {
    if (ttl === void 0) { ttl = null; }
    var _a = useState(function () { return getLocalItem(key, defaultValue); }), value = _a[0], setValue = _a[1];
    useEffect(function () {
        var listener = function (e) {
            if (typeof window !== 'undefined' && e.storageArea === localStorage && e.key === key) {
                setValue(e.newValue ? JSON.parse(e.newValue).value : e.newValue);
            }
        };
        window.addEventListener('storage', listener);
        return function () {
            window.removeEventListener('storage', listener);
        };
    }, [key, ttl, value]);
    return [value, setNewValueCallback(setValue, key, ttl)];
}
