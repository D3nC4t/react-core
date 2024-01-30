var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
import _extends from './extends';
export function isValidObject(item) {
  return item !== null && typeof item === 'object' && item.constructor === Object;
}
export default function deepmerge(target, source, options) {
  if (options === void 0) {
    options = {
      clone: true
    };
  }
  var output = options.clone ? _extends({}, target) : target;
  if (isValidObject(target) && isValidObject(source)) {
    for (var key in Object.keys(source)) {
      if (key === '__proto__') {
        return;
      }
      if (isValidObject(source[key]) && key in target && isValidObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (Array.isArray(source[key])) {
        output[key] = __spreadArray(__spreadArray([], (output[key] || []), true), source[key], true);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}
