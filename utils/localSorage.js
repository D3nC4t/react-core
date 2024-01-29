export var getLocalItem = function (key, defaultValue) {
    var storedValue = window !== undefined ? localStorage.getItem(key) : null;
    var item = storedValue ? JSON.parse(storedValue) : { value: defaultValue };
    if (item.expiresAt && item.expiresAt < Date.now()) {
        removeLocalItem(key);
        return defaultValue;
    }
    if (!storedValue && defaultValue) {
        setLocalItem(key, defaultValue);
    }
    else if (item.ttl) {
        setLocalItemTtl(key, item.ttl);
    }
    return item.value;
};
export var getLocalItemTtl = function (key) {
    var _a;
    var storedValue = window !== undefined ? localStorage.getItem(key) : null;
    if (!storedValue) {
        return null;
    }
    var item = JSON.parse(storedValue);
    return (_a = item.ttl) !== null && _a !== void 0 ? _a : null;
};
export var removeLocalItem = function (key) {
    localStorage.removeItem(key);
};
export var setLocalItem = function (key, value, skipEvent) {
    if (skipEvent === void 0) { skipEvent = false; }
    var toStore = { value: value };
    var oldValue = localStorage.getItem(key);
    var newValue = JSON.stringify(toStore);
    localStorage.setItem(key, newValue);
    if (skipEvent) {
        return;
    }
    var event = new StorageEvent('storage', {
        key: key,
        newValue: newValue,
        oldValue: oldValue,
        storageArea: localStorage,
    });
    window.dispatchEvent(event);
};
export var setLocalItemTtl = function (key, ttlInSeconds) {
    var storedValue = window !== undefined ? localStorage.getItem(key) : null;
    if (!storedValue) {
        if (process.env.NODE_ENV === 'development') {
            console.warn("C4t: Tried to set TTL on non-existing key \"".concat(key, "\""));
        }
        return;
    }
    var item = JSON.parse(storedValue);
    item.expiresAt = Date.now() + (ttlInSeconds * 1000);
    item.ttl = ttlInSeconds;
    localStorage.setItem(key, JSON.stringify(item));
};
export default localStorage;
