export var defaultDebounceTimeout = 300;
export default function debounce(func, wait) {
  if (wait === void 0) {
    wait = defaultDebounceTimeout;
  }
  var timeout;
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    timeout && clearTimeout(timeout);
    var $callback = function() {
      timeout = null;
      func.apply(void 0, args);
    };
    timeout = setTimeout($callback, wait);
  };
}
