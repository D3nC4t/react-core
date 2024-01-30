var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new(P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function(thisArg, body) {
  var _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;

  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y
          .next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1], done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
import {
  merge
} from 'lodash';
import {
  getConfig
} from '../config';
var loadAppI18nModuleData = null;
var subscriptions = {};
var modules = new Proxy({}, {
  set: function(target, module, value) {
    target[module] = new Proxy({}, {
      set: function(set, locale, messages) {
        var _a, _b;
        set[locale] = messages;
        for (var _i = 0, _c = Object.values((_b = (_a = subscriptions[module]) === null || _a === void 0 ?
            void 0 : _a[locale]) !== null && _b !== void 0 ? _b : {}); _i < _c.length; _i++) {
          var handler = _c[_i];
          handler(messages);
        }
        return true;
      }
    });
    for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
      var _b = _a[_i],
        locale = _b[0],
        messages = _b[1];
      target[module][locale] = messages;
    }
    return true;
  }
});
var loadModuleIfExists = function(path) {
  return __awaiter(void 0, void 0, void 0, function() {
    var e_1;
    var _a;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2, , 3]);
          return [4 /*yield*/ , import("./".concat(path))];
        case 1:
          return [2 /*return*/ , (_a = _b.sent()) !== null && _a !== void 0 ? _a : undefined];
        case 2:
          e_1 = _b.sent();
          if (process.env.NODE_ENV !== 'production') {
            console.warn("Module \"".concat(path, "\" not found"));
          }
          return [2 /*return*/ , undefined];
        case 3:
          return [2 /*return*/ ];
      }
    });
  });
};
export {
  default as useTranslations
}
from './hook';
export var DEFAULT_MODULE = 'core';
export var setAppI18nModuleDataLoader = function(loadModuleData) {
  loadAppI18nModuleData = loadModuleData;
};
export var loadCoreI18nModuleData = function(locale, module, skipDefault) {
  if (module === void 0) {
    module = DEFAULT_MODULE;
  }
  if (skipDefault === void 0) {
    skipDefault = false;
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var appData, _a, defaultLocale, defaultModule, _b, specificModule;
    var _c, _d, _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          if (hasModuleLocale(module, locale)) {
            return [2 /*return*/ , getModuleLocale(module, locale)];
          } else if (!hasModule(module)) {
            modules[module] = {};
          }
          if (!loadAppI18nModuleData) return [3 /*break*/ , 2];
          return [4 /*yield*/ , loadAppI18nModuleData(locale, module, skipDefault)];
        case 1:
          _a = _f.sent();
          return [3 /*break*/ , 3];
        case 2:
          _a = undefined;
          _f.label = 3;
        case 3:
          appData = _a;
          if (!appData) return [3 /*break*/ , 4];
          registerModuleLocale(module, locale, appData);
          return [3 /*break*/ , 9];
        case 4:
          defaultLocale = (_c = getConfig('defaultLocale')) !== null && _c !== void 0 ? _c : 'en';
          if (!(locale === defaultLocale || skipDefault)) return [3 /*break*/ , 5];
          _b = undefined;
          return [3 /*break*/ , 7];
        case 5:
          return [4 /*yield*/ , loadModuleIfExists("".concat(defaultLocale, "/").concat(module, ".json"))];
        case 6:
          _b = _f.sent();
          _f.label = 7;
        case 7:
          defaultModule = _b;
          return [4 /*yield*/ , loadModuleIfExists("".concat(locale, "/").concat(module, ".json"))];
        case 8:
          specificModule = _f.sent();
          registerModuleLocale(module, locale, merge({}, (_d = defaultModule === null || defaultModule ===
              void 0 ? void 0 : defaultModule.default) !== null && _d !== void 0 ? _d : {}, (_e =
              specificModule === null || specificModule === void 0 ? void 0 : specificModule.default) !==
            null && _e !== void 0 ? _e : {}));
          _f.label = 9;
        case 9:
          return [2 /*return*/ , getModuleLocale(module, locale)];
      }
    });
  });
};
export function hasModule(module) {
  return module in modules;
}
export function getModule(module) {
  var _a;
  return (_a = modules[module]) !== null && _a !== void 0 ? _a : undefined;
}
export function hasModuleLocale(module, locale) {
  return hasModule(module) && locale in modules[module];
}
export function getModuleLocale(module, locale) {
  var _a, _b;
  return (_b = (_a = getModule(module)) === null || _a === void 0 ? void 0 : _a[locale]) !== null && _b !== void 0 ?
    _b : undefined;
}
export function registerModule(module, locales) {
  modules[module] = locales;
}
export function registerModuleLocale(module, locale, messages) {
  if (!hasModule(module)) {
    registerModule(module, {});
  }
  modules[module][locale] = messages;
}
export var watchModuleTranslations = function(module, locale, callback) {
  var timestamp = Date.now();
  if (!subscriptions[module]) {
    subscriptions[module] = {};
  }
  if (!subscriptions[module][locale]) {
    subscriptions[module][locale] = {};
  }
  subscriptions[module][locale][timestamp] = callback;
  return function() {
    delete subscriptions[module][locale][timestamp];
  };
};
export default modules;
