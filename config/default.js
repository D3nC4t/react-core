import {
  getLocalItem,
  setLocalItem,
  setLocalItemTtl
} from '../utils/localSorage';
export var CONFIG_KEY = 'c4t-react-ts-config';
var subscriptions = {};
var config = new Proxy(getLocalItem(CONFIG_KEY) || {
  configTTL: 60 * 60 * 24 * 7,
  defaultLocale: 'en',
  enabledLocales: ['en', 'es', 'pt'],
  locale: 'en',
}, {
  set: function(target, prop, value) {
    var _a;
    var oldValue = target[prop];
    target[prop] = value;
    for (var _i = 0, _b = Object.values((_a = subscriptions[prop]) !== null && _a !== void 0 ? _a : {}); _i < _b
      .length; _i++) {
      var handler = _b[_i];
      handler(value, oldValue);
    }
    setTimeout(function() {
      return persistConfig();
    }, 300);
    return true;
  }
});
export var deleteConfig = function(prop) {
  delete config[prop];
};
export var getConfig = function(prop) {
  var _a;
  return (_a = config[prop]) !== null && _a !== void 0 ? _a : undefined;
};
export var persistConfig = function() {
  var ttl = config.configTTL;
  setLocalItem(CONFIG_KEY, config);
  if (ttl) {
    setLocalItemTtl(CONFIG_KEY, ttl);
  }
  return config;
};
export var setConfig = function(prop, value, forceValue) {
  if (forceValue === void 0) {
    forceValue = false;
  }
  forceValue ? (config[prop] = value) : defineConfig(prop, value);
};
export var defineConfig = function(prop, value, migration) {
  if (migration === void 0) {
    migration = undefined;
  }
  if (!config[prop]) {
    config[prop] = value;
  } else if (migration) {
    config[prop] = migration(config[prop], value);
  }
};
export var watchConfig = function(prop, callback) {
  var timestamp = Date.now();
  if (!subscriptions[prop]) {
    subscriptions[prop] = {};
  }
  subscriptions[prop][timestamp] = callback;
  return function() {
    delete subscriptions[prop][timestamp];
  };
};
export default persistConfig();
